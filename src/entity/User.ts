import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
	firstName: string;
    @Column()
	lastName: string;
    @Column()
	address: string;
    @Column()
	postcode: number;
    @Column()
	mobileNumber: string;
    @Column()
	username: string;
    @Column()
	password: string;
}