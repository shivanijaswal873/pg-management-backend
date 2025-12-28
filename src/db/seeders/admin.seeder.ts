import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Admin, AdminDocument } from '../../app/admin/auth/schema/auth.schema';

@Injectable()
export class AdminSeeder implements OnModuleInit {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<AdminDocument>,
  ) {}

  async onModuleInit() {
    const email = 'admin@example.com';

    const exists = await this.adminModel.findOne({ email });
    if (!exists) {
      const hashed = await bcrypt.hash('Admin@123', 10);

      await this.adminModel.create({
        name: 'Super Admin',
        email,
        mobile: '9999999999',
        password: hashed,
        status: true,
        softdelete: false,
      });

      console.log('✅ Admin seeded successfully');
    }
  }
}
