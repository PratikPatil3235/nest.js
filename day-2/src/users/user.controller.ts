import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserContoller {
  @Get('/find')
  findAllUsers(): string {
    return `This will return all Users`;
  }

  @Post('/addUser')
  addUser(): string {
    return `This will add a User`;
  }
}
