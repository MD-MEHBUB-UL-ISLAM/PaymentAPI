import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';

  import { Request, Response } from 'express';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { AuthDto, AuthLoginDto } from './dto/auth.dto';
import { RtGuard } from 'src/common/decorators/guards/rt.guard';
import { AtGuard } from 'src/common/decorators/guards/at.guard';

  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @Post('register')
    async signup(@Body() dto: AuthDto, @Res() res: Response) {
      const tokens = await this.authService.signup(dto);
      res.cookie('access_token', tokens.access_token, { httpOnly: true });
      res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true });
      return res.send(tokens);
    }
  
    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async signin(@Body() dto: AuthLoginDto, @Res() res: Response) {
      const tokens = await this.authService.signin(dto, res);
      return res.send(tokens);
    }
  
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(
      @GetCurrentUserId() userId: number,
      @Res() res: Response,
    ) {
      const result = await this.authService.logout(userId, res);
      return res.send(result);
    }
  
    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refreshTokens(
      @GetCurrentUserId() userId: number,
      @GetCurrentUser('refreshToken') refreshToken: string,
      @Res() res: Response,
    ) {
      const tokens = await this.authService.refreshTokens(
        userId,
        refreshToken,
        res,
      );
      return res.send(tokens);
    }
  
    @UseGuards(AtGuard)
    @Get('me')
    getMe(@GetCurrentUserId() userId: number) {
      console.log("userId in getMe:", userId);  // Should no longer be undefined
      return this.authService.getMe(userId);
    }
    

  }