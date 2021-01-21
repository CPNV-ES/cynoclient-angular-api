import {Column, HasMany, Model, Table} from 'sequelize-typescript';
import {Breed} from "./breed.model";

@Table({modelName: "categories", timestamps: false})
export class Category extends Model<Category> {
    @Column
    noun: string;

    @HasMany(() => Breed)
    breeds: Breed[];
}