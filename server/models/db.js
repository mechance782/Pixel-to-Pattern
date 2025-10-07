import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import path from 'path';


const envPath = path.resolve(import.meta.dirname, '../../db.env');
dotenv.config({
    path: envPath
});


const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

// set up sequelize connection to database
const sequelize = new Sequelize(
    DB_DATABASE, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: query => console.log(`SQL: ${query}` )
    }
);

try {
    await sequelize.authenticate();
    console.log('Connected successfully');
} catch (error) {
    console.error('Unable to connect:', error);
}

export default sequelize;