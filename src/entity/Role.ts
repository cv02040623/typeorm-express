import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, JoinTable, OneToMany } from 'typeorm';
import { Length, MaxLength, IsNotEmpty, IsOptional } from 'class-validator';
import { Account } from './Account';



@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ unique: true })
    @Length(1, 10, { message: '长度限制1~10位' })
    @IsNotEmpty({ message: '角色名称不能为空' })
    name: string;

    @Column({ default: '' })
    desc: string;

    @Column({ comment: '创建人' })
    @IsOptional()
    createById: Number;

    @Column({ default: 1 })
    status: Number

    @Column()
    @UpdateDateColumn()
    update_time: Date

    @Column()
    @CreateDateColumn()
    create_time: Date

    @Column({ default: '' })
    @IsOptional()
    author_id: string;

    @OneToMany(type => Account, account => account.rid)
    accounts:Account[]
}
