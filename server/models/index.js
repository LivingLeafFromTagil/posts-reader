const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  lastname: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  subsCount: {type: DataTypes.INTEGER, defaultValue: 0},
  postsCount: {type: DataTypes.INTEGER, defaultValue: 0},
  private: {type: DataTypes.BOOLEAN, defaultValue: false},
  password: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
  avatar: {type: DataTypes.STRING, defaultValue: ''}
});

const Post = sequelize.define('post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, defaultValue: ''},
  date: {type: DataTypes.DATE, allowNull: false},
  img: {type: DataTypes.STRING, defaultValue: ''}
});

const Subs = sequelize.define('subs', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  subs: {type: DataTypes.ARRAY(DataTypes.INTEGER)}
});

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Subs);
Subs.belongsTo(User);

module.exports = {
  User,
  Post,
  Subs,
}