import pkg from 'sequelize';
const {Sequelize, DataTypes, Model} = pkg;
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')

export {Sequelize, DataTypes, Model, sequelize}