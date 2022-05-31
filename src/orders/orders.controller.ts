import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Order } from './orders.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private OrdersService: OrdersService){}

    @Get('/get/:orderId')
    getOrder(@Param('orderId') orderId: string): Observable <Order> {
        return this.OrdersService.getOrder(orderId)
    }
}
