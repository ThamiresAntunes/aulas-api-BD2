import sequelize from "../database/sequelize.js";
import { DataTypes } from "sequelize";

//modelo para criar a tabela User no banco de dados
const User = sequelize.define(
    'User',
    {
      //cria uma coluna para o primeiro nome, que nao pode ser nula
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    }
);
//cria a tabela no banco de dados
User.sync();

export default User;