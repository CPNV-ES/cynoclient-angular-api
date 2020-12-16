import express from "express";
import {route} from "./route";
import {Sequelize} from 'sequelize-typescript';
import cors from "cors";
import bodyParser from "body-parser"
import dotenv from "dotenv";
dotenv.config()


const parser = bodyParser;
const port = 3000;
const ip = "0.0.0.0";
const app = express();

const sequelize =  new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mariadb',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // storage: ':memory:',
  // models: [__dirname + '/src/models/*.model.ts'],
  models: [__dirname + '/models/*.model.js'],
  modelMatch: (filename, member) => {
      return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
});

sequelize.authenticate()
sequelize.sync();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

route(app);

app.listen(port, ip, () => {
  // console.log(`Server is up and running on ${ip}:${port}`)
});
