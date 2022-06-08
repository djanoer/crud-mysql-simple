import {Sequelize} from "sequelize";

const db = new Sequelize('nodejs_mysql_simple','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;