import { Sequelize } from "sequelize";

export default new Sequelize('filmes_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306'
});
