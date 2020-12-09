import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';

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

}