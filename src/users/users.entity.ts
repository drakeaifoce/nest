import { Order } from "src/orders/orders.entity";
import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column({ type: 'varchar', length: 256 })
    public name: string;

    @Column({ type: 'varchar', length: 256 })
    public email: string;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
}