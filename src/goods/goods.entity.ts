import { Order } from "src/orders/orders.entity";
import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from "typeorm"

@Entity()
export class Good {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column({ type: 'varchar', length: 256 })
    public name: string;

    @Column({ type: 'int' })
    public price: number;

    @ManyToOne(() => Order, (order) => order.goods)
    order: Order
}