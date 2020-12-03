import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Breed } from './breed.model';
import { Client } from './client.model';

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

    @BelongsTo(() => Breed)
    breed: Breed;


}