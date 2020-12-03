import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
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


}