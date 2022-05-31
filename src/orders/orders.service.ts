import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) {}

    getOrder(orderId: string): Observable<Order> {
        return from (this.orderRepository.findOne(orderId, {relations: ['goods']}))
    }
}
