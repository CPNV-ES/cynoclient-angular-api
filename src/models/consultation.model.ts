import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {Category} from "./category.model";

@Table({modelName: "consultations", timestamps: false})
export class Consultation extends Model<Consultation> {

    @Column
    situation: string;

    @Column
    goal: string;

    @Column
    deadline: string;

    @Column
    solution: string;

    @Column
    medicines: string;

    @Column
    argumentation: string;


}