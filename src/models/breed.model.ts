import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {Category} from "./category.model";
import { Dog } from './dog.model';

@Table({modelName: "breeds", timestamps: false})
export class Breed extends Model<Breed> {
    @Column
    link: string;

    @Column
    picture: string;

    @Column
    noun: string;

    @ForeignKey(() => Category)
    @Column({field: "id_category"})
    idCategory: number;

    @BelongsTo(() => Category)
    category: Category;

    @Column
    morphotype: string;

    @Column
    classification: string;

    @Column({field: "min_size_female"})
    minSizeFemale: number;

    @Column({field: "max_size_female"})
    maxSizeFemale: number;

    @Column({field: "min_size_male"})
    minSizeMale: number;

    @Column({field: "max_size_male"})
    maxSizeMale: number;

    @Column({field: "min_weight_female"})
    minWeightFemale: number;

    @Column({field: "max_weight_female"})
    maxWeightFemale: number;

    @Column({field: "min_weight_male"})
    minWeightMale: number;

    @Column({field: "max_weight_male"})
    maxWeightMale: number;

    @Column({field: "life_expectancy"})
    lifeExpectancy: number;

    @HasMany(() => Dog, 'idBreed')
    dogs: Dog[];

    @HasMany(() => Dog, 'idCrossBreed')
    crossdogs: Dog[];

}