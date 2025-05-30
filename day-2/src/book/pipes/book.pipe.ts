import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookDto } from '../dto/book.dto';
import { validate } from 'class-validator';

export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const bookClass = plainToInstance(BookDto, value);
    const error = await validate(bookClass);

    if (error.length > 0) {
      throw new BadRequestException(
        'validation failed' + JSON.stringify(error),
      );
    }

    console.log(value, typeof value);
    return value;
  }
}
