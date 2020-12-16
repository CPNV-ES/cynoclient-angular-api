import {Table, Column, Model, ForeignKey, BelongsTo, HasMany, BelongsToMany} from 'sequelize-typescript';
import { Consultation } from './consultation.model';
import {Locality} from './locality.model';
import {ClientService} from "./clientservice.model";
import {Client} from "./client.model";

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

    @HasMany(() => Consultation)
    consultations: Consultation[];

    @BelongsToMany(() => Client, () => ClientService)
    clients: Client[];
}