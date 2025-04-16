import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  '',
) {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.refresh_token;
        },
      ]),
      secretOrKey: config.get(''),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: { sub: number; email: string }) {
    const refreshToken = req.cookies?.refresh_token;
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    if (user.refreshToken !== refreshToken) {
      return null;
    }
    return user;
  }
}