import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate{

    public username: string = "slash";
    public password:string='1234'
    canActivate(context: ExecutionContext): boolean  {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>()
        if (request.header("username") == undefined ||
        request.header('password')==undefined) return false;

        return (request.header("username") == this.username &&
        request.header('password')==this.password)
    }
}