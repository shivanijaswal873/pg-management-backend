import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from '../app/admin/auth/schema/auth.schema';
import { AdminSeeder } from './seeders/admin.seeder';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Admin.name, schema: AdminSchema },
    ]),
  ],
  providers: [AdminSeeder],
})
export class DbModule {}
