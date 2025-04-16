import {
    ForbiddenException,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { PrismaService } from '../prisma/prisma.service';

  import * as bcrypt from 'bcryptjs';
  import { JwtService } from '@nestjs/jwt';
  import { ConfigService } from '@nestjs/config';
  import { Response } from 'express';
  import { Role } from '@prisma/client';
  import { AuthDto, AuthLoginDto } from './dto/auth.dto';
  
  @Injectable()
  export class AuthService {
    constructor(
      private prisma: PrismaService,
      private jwt: JwtService,
      private config: ConfigService,
    ) {}
  
    async signup(dto: AuthDto) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(dto.password, salt);
  
      try {
        const user = await this.prisma.user.create({
          data: {
            email: dto.email,
            password: hash,
            name: dto.name,
            role: Role.USER,
          },
        });
  
        return this.signToken(user.id, user.email, user.role);
      } catch (error) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
        throw error;
      }
    }
  
    async signin(dto: AuthLoginDto, res: Response) {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
  
      if (!user) throw new UnauthorizedException('Credentials incorrect');
  
      const pwMatches = await bcrypt.compare(dto.password, user.password);
      if (!pwMatches) throw new UnauthorizedException('Credentials incorrect');
  
      const tokens = await this.signToken(user.id, user.email, user.role);
      await this.updateRefreshToken(user.id, tokens.refresh_token);
  
      res.cookie('access_token', tokens.access_token, { httpOnly: true });
      res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true });
  
      return tokens;
    }
  
    async logout(userId: number, res: Response) {
      await this.prisma.user.updateMany({
        where: {
          id: userId,
          refreshToken: {
            not: null,
          },
        },
        data: {
          refreshToken: null,
        },
      });
  
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');
      return { message: 'Logged out successfully' };
    }
  
    async refreshTokens(userId: number, refreshToken: string, res: Response) {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user || !user.refreshToken)
        throw new ForbiddenException('Access Denied');
  
      const refreshTokenMatches = user.refreshToken === refreshToken;
      if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
  
      const tokens = await this.signToken(user.id, user.email, user.role);
      await this.updateRefreshToken(user.id, tokens.refresh_token);
  
      res.cookie('access_token', tokens.access_token, { httpOnly: true });
      res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true });
  
      return tokens;
    }
  
    async updateRefreshToken(userId: number, refreshToken: string) {
      const salt = await bcrypt.genSalt(10);
      const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
      await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          refreshToken: hashedRefreshToken,
        },
      });
    }
  
    async signToken(
      userId: number,
      email: string,
      role: Role,
    ): Promise<{ access_token: string; refresh_token: string }> {
      const payload = {
        sub: userId,
        email,
        role,
      };
  
      const accessToken = await this.jwt.signAsync(payload, {
        expiresIn: this.config.get('JWT_EXPIRATION'),
        secret: this.config.get('JWT_SECRET'),
      });
  
      const refreshToken = await this.jwt.signAsync(payload, {
        expiresIn: this.config.get('REFRESH_TOKEN_EXPIRATION'),
        secret: this.config.get('REFRESH_TOKEN_SECRET'),
      });
  
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    }
  
    async getMe(userId: number) {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
  
      if (!user) throw new ForbiddenException('User not found');
      return user;
    }
  }