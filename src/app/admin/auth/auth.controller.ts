import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AdminLoginDto } from './dto/admin-login.dto';

@ApiTags('Admin Auth')
@Controller('/api/admin/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Admin login' })
  login(@Body() dto: AdminLoginDto) {
    return this.authService.adminLogin(dto.email, dto.password);
  }
}
