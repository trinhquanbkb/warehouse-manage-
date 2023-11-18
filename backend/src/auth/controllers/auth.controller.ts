import { Body, Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { SignUpDto } from '../dto/sign-up.dto';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpValidation } from '../pipes/signUpValidation.pipe';
import { SignInValidation } from '../pipes/signInValidation.pipe';
import { JwtAuthGuard } from '../guards/jwt.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }
  @Post('sign-up')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('authorization')

  async signUp(@Body(SignUpValidation) body: SignUpDto, @Request() req) {
    console.log(req.user)
    body.parent_id = req.user.userId
    const data = await this.authService.signUp(body);
    return data;
  }

  @Post('sign-in')
  async signIn(@Body(SignInValidation) body: SignInDto) {
    return await this.authService.signIn(body);
  }

}
