import { All, Controller, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller("*")

export class NotFountController{
    @All()
    handleAll(@Req() req: Request, @Res() res: Response) {
        return res.status(404).json({
            statusCode: 404,
            message: `Route ${req.originalUrl} not found`,
        });
    }

}