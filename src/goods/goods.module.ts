import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from './goods.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Good])],
  providers: [GoodsService],
  controllers: [GoodsController]
})
export class GoodsModule {}
