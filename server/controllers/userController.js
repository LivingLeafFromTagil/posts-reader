const ApiError = require('../error/ApiError');
const {User, Subs} = require('../models');

class UserController {
  async getUser(req, res, next) {
    const {id} = req.params;
    const user = await User.findOne({where: {id}});
    if (!user) {
      return next(ApiError.notFound(`User with ID ${id} doesn't exist`));
    }
    return res.status(200).json(user);
  };

  async getSubs(req, res, next) {
    const {id} = req.params;
    const subs = await Subs.findOne({where: {userId: id}});
    if (!subs) {
      return next(ApiError.notFound(`User with ID ${id} doesn't exist`));
    }
    return res.status(200).json(subs);
  };

  async createUser(req, res, next) {
    const {name, lastname, email} = req.body;
    const user = await User.create({
      name,
      lastname,
      email,
      password,
    });
    return res.status(200).json(user);
  }

  async createSub(req, res, next) {
    const {userId, subId} = req.body;
    const user = await User.findOne({where: {userId}});
    const sub = await User.findOne({where: {subId}});
  }

  async deleteUser(req, res) {

  };


  async login(req, res) {

  };

  async registration(req, res) {

  };

  async checkAuth(req, res) {

  };
};

module.exports = new UserController();