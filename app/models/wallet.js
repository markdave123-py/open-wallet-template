import { DataTypes, Model } from "sequelize";
import { myDatabase } from "../config/database";



export class Wallet extends Model {}

Wallet.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Dollar"
    }, 
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.00
    }

},{
    sequelize: myDatabase,
})