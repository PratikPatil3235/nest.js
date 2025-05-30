import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor() {
        super("This is my custome class Exception", HttpStatus.CONTENT_DIFFERENT);
    }
}