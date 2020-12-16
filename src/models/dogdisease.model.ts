import {Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Client} from "./client.model";
import {Service} from "./service.model";
import {Disease} from "./disease.model";
import {Dog} from "./dog.model";

@Table({modelName: "dogs_have_diseases", timestamps: false})
export class DogDisease extends Model<DogDisease> {
    @ForeignKey(() => Dog)
    @Column({field: "id_dog"})
    idDog: number;

    @ForeignKey(() => Disease)
    @Column({field: "id_disease"})
    idDisease: number;

}