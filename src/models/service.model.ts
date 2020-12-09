import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Locality} from './locality.model';

@Table({modelName: "services",timestamps: false})

export class Service extends Model<Service> {
    @Column
    moment: Date;

    @Column
    duration: number;

    @Column
    type: string;

    @Column
    description: number;

    @Column
    street: number;

    @ForeignKey(() => Locality)
    @Column({field: "id_locality"})
    idLocality: number;

    @BelongsTo(() => Locality)
    locality: Locality;
}