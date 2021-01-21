import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import {Dog} from "./dog.model";
import {DogDisease} from "./dogdisease.model";

@Table({modelName: "diseases",timestamps: false})

export class Disease extends Model<Disease> {
    @Column
    noun: string;

    @Column
    description: string;

    @Column
    symptoms: string;

    @Column
    preventive: string;

    @Column
    curative: string;

    @Column
    vaccinable: number;

    @Column
    zoonosis: number;

    @BelongsToMany(() => Dog, () => DogDisease)
    dogs: Dog[];
}