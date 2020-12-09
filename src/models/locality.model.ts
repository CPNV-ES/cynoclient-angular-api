import {Table, Column, Model, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';
import { Client } from './client.model';
import { Service } from './service.model';

@Table({modelName: "localities", timestamps: false})
export class Locality extends Model<Locality> {
    @Column
    noun: string;

    @Column
    zip: number;

    @Column({
        field: 'zip_Complement'
    })
    zipComplement: number;

    @Column
    toponym: string;

    @Column
    department: string;

    @Column
    language: string;

    @HasMany(() => Client)
    clients: Client[];

    @HasMany(() => Service)
    services: Service[];

}