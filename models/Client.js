const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Client extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isUser_name: true,
      },
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4],
        },
    },

interest: {
  type: DataTypes.STRING,
  allowNull: false,
},
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'client',
  }
);

module.exports = Client;
