import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Good } from './goods.entity';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Good)
        private readonly goodRepository: Repository<Good>
    ){}
    

    getUserOrders(userId: string): Observable<Good[]> {
        return from (
            this.goodRepository
                .createQueryBuilder('good')
                .innerJoin("good.order", "order")
                .where('order.userId = :userId', { userId: userId})
                .getMany()
        )
    }
}
