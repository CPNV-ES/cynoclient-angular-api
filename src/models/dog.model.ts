import {Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import { Breed } from './breed.model';
import { Client } from './client.model';
import {Service} from "./service.model";
import {ClientService} from "./clientservice.model";

@Table({modelName: "dogs",timestamps: false})

export class Dog extends Model<Dog> {
    @Column
    noun: string;

    @Column
    female: number;

    @Column
    birthdate: Date;

    @Column
    sterilized: number;

    @Column
    chemical: number;

    @Column
    color: string;

    @Column
    dead: number;

    @ForeignKey(() => Client)
    @Column({field: "id_client"})
    idClient: number;

    @BelongsTo(() => Client)
    client: Client;

    @ForeignKey(() => Breed)
    @Column({field: "breed"})
    idBreed: number;

    @BelongsTo(() => Breed, 'idBreed')
    breed: Breed;

    @ForeignKey(() => Breed)
    @Column({field: "crossbreed"})
    idCrossBreed: number;

    @BelongsTo(() => Breed, "idCrossBreed")
    crossbreed: Breed;

    @BelongsToMany(() => Service, () => ClientService)
    services: Service[];
}