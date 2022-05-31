import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Good } from './goods.entity';
import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
    constructor(private GoodsService: GoodsService){}

    @Get('/get-by-client-id/:userId')
    getUserOrders(@Param('userId') userId: string): Observable<Good[]> {
        return this.GoodsService.getUserOrders(userId)
    }
}
