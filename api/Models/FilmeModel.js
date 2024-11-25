import { DataTypes } from "sequelize";
import database from "../Data/DbConnection.js";

export default database.define("filmes", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(145)
    },
    diretor: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    nota: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});