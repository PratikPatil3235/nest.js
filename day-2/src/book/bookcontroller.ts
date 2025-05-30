import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  ValidationPipe,
  HttpCode,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookException } from './book.exception';
import { BookCustomeExceptionFilter } from './Book.exception.filter';
import { BookGuard } from './book.guard';

//@UseGuards(new BookGuard)   //all routes of class BookController will haave to go throught BookGuard
@Controller('book')
export class BookContoller {
  @Get('/redirect')
  @Redirect()
  redirect() {
    return { url: 'https://www.youtube.com', statusCode: 302 };
  }

  @Get('/find')
  @UseGuards(new BookGuard) // route level guard which will only check for this route
  findAllBooks(): string {
    return `This will return all Books`;
  }

  @Post('/addBook')
  addBook(@Body(new ValidationPipe()) book: BookDto): string {
    return `This will add a book`;
  }

  @Get('')
  @UseFilters(BookCustomeExceptionFilter)
  helloBookApi(): string {
    throw new BookException();
  }

  @Get('/:id')
  findBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return `Book By Id`;
  }
}
