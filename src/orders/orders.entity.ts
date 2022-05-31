import { Good } from "src/goods/goods.entity";
import { User } from "src/users/users.entity";
import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    AfterLoad,
    getRepository
} from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @CreateDateColumn()
    public date: Date;

    @Column({ type: 'int'})
    public sum: number;

    @ManyToOne(() => User, (user) => user.orders)
    user: User

    @OneToMany(() => Good, (good) => good.order)
    goods: Good[]

    @AfterLoad()
        calculateSum = async () => {
            const result = await getRepository(Good)
                .createQueryBuilder('good')
                .select("SUM(good.price)::int as sum")
                .where(`good."orderId" = :id`, { id: this.id })
                .getRawOne()

            if(this.sum !== result.sum) {
                this.sum = result.sum
            }
        }
}