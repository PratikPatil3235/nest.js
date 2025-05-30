import { ArgumentsHost, Body, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

import { Request, Response } from "express";


@Catch(HttpException)
export class BookCustomeExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toDateString(),
            url: request.url,
            host:request.get("host")
        })


    }
}