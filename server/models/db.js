import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// should probably change this to absolute path
dotenv.config({
    path: '../../db.env'
});

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

// set up sequelize connection to database
const sequelize = new Sequelize(
    'pixel_pattern_db', 'remote', 'Pixel372', {
        host: '143.198.75.243',
        port: 3306,
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