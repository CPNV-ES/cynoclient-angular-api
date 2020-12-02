import {Table, Column, Model} from 'sequelize-typescript';

@Table({timestamps: false})

export class Client extends Model<Client> {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    female: number;

    @Column
    email: string;

    @Column
    phone: string;

    @Column
    street: string;


}