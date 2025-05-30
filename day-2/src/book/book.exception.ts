import { HttpException, HttpStatus } from '@nestjs/common';

export class BookException extends HttpException {
  constructor() {
    super("Constructor Exception handler",403);
  }
}
