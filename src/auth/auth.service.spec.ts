import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let authService: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;
  let configService: ConfigService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              updateMany: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
    jwtService = moduleRef.get<JwtService>(JwtService);
    configService = moduleRef.get<ConfigService>(ConfigService);

    (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
    (bcrypt.genSalt as jest.Mock).mockResolvedValue('salt');
    (bcrypt.compare as jest.Mock).mockImplementation((plain, hashed) => {
      return Promise.resolve(plain === 'password' && hashed === 'hashedPassword');
    });
  });

  describe('signup', () => {
    it('should create a new user and return tokens', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password',
        name: 'Test User',
      };

      const mockUser = {
        id: 1,
        email: dto.email,
        password: 'hashedPassword',
        name: dto.name,
        role: Role.USER,
      };

      const mockTokens = {
        access_token: 'accessToken',
        refresh_token: 'refreshToken',
      };

      jest.spyOn(prismaService.user, 'create').mockResolvedValue(mockUser);
      jest.spyOn(authService, 'signToken').mockResolvedValue(mockTokens);

      const result = await authService.signup(dto);

      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          email: dto.email,
          password: 'hashedPassword',
          name: dto.name,
          role: Role.USER,
        },
      });
      expect(result).toEqual(mockTokens);
    });

    it('should throw ForbiddenException if email is taken', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password',
        name: 'Test User',
      };

      jest.spyOn(prismaService.user, 'create').mockRejectedValue({
        code: 'P2002',
      });

      await expect(authService.signup(dto)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('signin', () => {
    it('should return tokens if credentials are valid', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password',
      };

      const mockUser = {
        id: 1,
        email: dto.email,
        password: 'hashedPassword',
        role: Role.USER,
      };

      const mockTokens = {
        access_token: 'accessToken',
        refresh_token: 'refreshToken',
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(authService, 'signToken').mockResolvedValue(mockTokens);
      jest.spyOn(authService, 'updateRefreshToken').mockResolvedValue(undefined);

      const res = {
        cookie: jest.fn(),
      } as any;

      const result = await authService.signin(dto, res);

      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: dto.email },
      });
      expect(result).toEqual(mockTokens);
    });

    it('should throw UnauthorizedException if email is incorrect', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      const res = {
        cookie: jest.fn(),
      } as any;

      await expect(authService.signin(dto, res)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException if password is incorrect', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password',
      };

      const mockUser = {
        id: 1,
        email: dto.email,
        password: 'hashedPassword',
        role: Role.USER,
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => false);


      const res = {
        cookie: jest.fn(),
      } as any;

      await expect(authService.signin(dto, res)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
});