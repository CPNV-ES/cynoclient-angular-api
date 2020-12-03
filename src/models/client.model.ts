import {Table, Column, Model, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { Dog } from './dog.model';
import {Locality} from './locality.model';

@Table({modelName: "clients", timestamps: false})
export class Client extends Model<Client> {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    female: number;

    @Column
    email: string;

    @Column
    phone: string;

    @Column
    street: string;

    @ForeignKey(() => Locality)
    @Column({field: "id_locality"})
    idLocality: number;

    @BelongsTo(() => Locality)
    locality: Locality;

    @HasMany(() => Dog)
    dogs: Dog[];


}