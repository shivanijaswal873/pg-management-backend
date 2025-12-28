import { ApiProperty } from '@nestjs/swagger';

export class AdminLoginDto {
  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @ApiProperty({ example: 'Admin@123' })
  password: string;
}
