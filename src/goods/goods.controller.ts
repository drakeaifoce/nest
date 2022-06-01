import { Headers, Body, Controller, Get, Head, HttpCode, HttpException, HttpStatus, Param, Res, Header } from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { Good } from './goods.entity';
import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
    constructor(private GoodsService: GoodsService){}

    @Get('/get-by-client-id/:userId')
    getUserOrders(@Param('userId') userId: string, @Headers() header) {
        const goods = this.GoodsService.getUserOrders(userId)

        if(header.authorization === 'Bearer ' + process.env.JWT_SECRET) {
            return goods;
        }
        else throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
}
