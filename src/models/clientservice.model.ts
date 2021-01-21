import {Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Client} from "./client.model";
import {Service} from "./service.model";
import {Dog} from "./dog.model";

@Table({modelName: "clients_take_services", timestamps: false})
export class ClientService extends Model<ClientService> {
    @ForeignKey(() => Client)
    @Column({field: "id_client"})
    idClient: number;

    @ForeignKey(() => Service)
    @Column({field: "id_service"})
    idService: number;

    @ForeignKey(() => Dog)
    @Column({field: "dogs_id"})
    idDog: number;

    @Column
    paid: number;
}