import sequelize from "./db.js";
import { DataTypes } from 'sequelize';

// Create schema that represents Patterns table in db
const Patterns = sequelize.define('pattern', {
    pattern_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pattern_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pattern_rows: {
        type: DataTypes.JSON,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'Patterns',
    timestamps: false
});

// make sure Patterns table exists
await Patterns.sync();

// sample data insertion:
// await Patterns.create({
//     pattern_name: "example",
//     pattern_rows: JSON.stringify(['row1', 'row2']),
//     description: 'sample desc',
// });

export default Patterns;
