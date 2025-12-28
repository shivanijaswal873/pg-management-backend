import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './app/admin/admin.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pg_management'),
    DbModule,
    AdminModule,
  ],
})
export class AppModule {}
