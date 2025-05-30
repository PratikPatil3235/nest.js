import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { BookGuard } from './book/book.guard';
const fs = require('fs');
const path = require('path');

function loggerMiddleWare(req: Request, res: Response, next: NextFunction) {
  let protocol = req.protocol;
  let host = req.get('host');
  let url = req.originalUrl;
  let method = req.method;
  let date = new Date().toDateString();

  const log = `${protocol}://${host}${url}   ${method} ${date} \n`;

  const logFilePath = path.join(process.cwd(), 'logs.txt');

  console.log(log);

  fs.appendFile(logFilePath, log, (err: any) => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });

  next();
}
async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use(loggerMiddleWare);
  // app.useGlobalGuards(new BookGuard()) // global guard which checks for every route inside our application
  await app.listen(PORT);
}
bootstrap();
