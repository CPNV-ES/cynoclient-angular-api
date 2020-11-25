import {Sequelize} from 'sequelize-typescript';

const sequelize =  new Sequelize({
        database: 'cynoclient',
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        storage: ':memory:',
        // models: [__dirname + '/src/models/*.model.ts'],
        models: [__dirname + '/src/models'],
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });