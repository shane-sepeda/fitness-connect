
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connections");

class Trainer extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Trainer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      },
    },

    skills: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newTrainerData) {
            newTrainerData.password = await bcrypt.hash(newTrainerData.password, 10);
            return newTrainerData;
            
        },
        // set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedTrainerData) {
            updatedTrainerData.password = await bcrypt.hash(updatedTrainerData.password, 10);
            return updatedTrainerData;
        }
    },
  
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "trainer",
  }
);

module.exports = Trainer;
