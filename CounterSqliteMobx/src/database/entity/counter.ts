import {Column, Entity} from "typeorm";

@Entity('Counter')
export class Counter {
    @Column({primary: true, type: 'integer', nullable: false})
    Id!: number;

    @Column({type: 'integer', nullable: false})
    Count!: number;

    @Column({type: 'text', nullable: false})
    Tarih!: string;
}