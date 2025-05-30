import { Module } from '@nestjs/common';
import { UserContoller } from './user.controller';

@Module({
  imports: [],
  controllers: [UserContoller],
  providers: [],
  exports: [],
})
export class UsersModule {}
