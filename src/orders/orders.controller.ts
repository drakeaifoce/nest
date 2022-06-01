import { Controller, Get, HttpException, HttpStatus, Param, UseGuards, Headers } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Order } from './orders.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private OrdersService: OrdersService){}

    @Get('/get/:orderId')
    getOrder(@Param('orderId') orderId: string, @Headers() header) {
        const orders =  this.OrdersService.getOrder(orderId)

        if(header.authorization === 'Bearer ' + process.env.JWT_SECRET) {
            return orders;
        }
        else throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
}
