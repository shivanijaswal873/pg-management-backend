import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { Admin, AdminDocument } from './schema/auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}

  async adminLogin(email: string, password: string) {
    const admin = await this.adminModel.findOne({
      email,
      status: true,
      softdelete: false,
    });

    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // ✅ JWT Payload
    const payload = {
      sub: admin._id,
      email: admin.email,
      role: 'admin',
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      message: 'Admin login successful',
      token: accessToken, 
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        mobile: admin.mobile,
      },
    };
  }
}
