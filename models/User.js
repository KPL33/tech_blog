//"Models" are in charge of all of the data-related logic. Here, we establish what a "User" actually is and the criteria that said "User" needs to follow in order to validate their session.

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//Here, we keep track of the "User"s, by assigning each an "id" (number) when they "sign-up" and we bind that with the user "name" and "password" they chose.
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    //Triggered just "before" "newUserData" is created, here we call "bcrypt.hash" on what the "User" has entered as their "password" and "await" the "return" of the encrypted "password", at which point, it is then assigned back to newUserData.password.
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //The modified "newUserData" object is returned from the "hook" function, allowing the "newUser" creation process to continue with the hashed "password".
        return newUserData;
      },
      //Triggered just "before" an existing "User"s "Data" is "updated", this function takes the "UserData", "hash"es the associated "password" and then assigns that "password" back to the "UserData".
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //The "updatedUserData" object is returned, allowing the "update" process to continue with the "hash"ed "password".
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

//We then export the "User" "Model", so that it can be can be accessed by "./index.js".
module.exports = User;