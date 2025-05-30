import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookContoller } from './bookcontroller';
import { BookMiddleware } from './book.middleware';

@Module({
  imports: [],
  controllers: [BookContoller],
  providers: [],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('book');
  }
}
