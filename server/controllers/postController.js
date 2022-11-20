const ApiError = require('../error/ApiError');
const {Post} = require('../models');

class PostController {
  async createPost(req, res) {
    try {
      const {title, description, date, img, userId} = req.body;
      const post = await Post.create({
        title, 
        description, 
        date, 
        img, 
        userId,
      });
      return res.json(post);  
    } catch (error) {
      console.log(error);
    };
  };

  async getPosts(req, res) {
    const posts = await Post.findAll();
    return res.json(posts);
  };
  
  async getPost(req, res, next) {
    const {id} = req.params;
    const post = await Post.findOne({where: {id}});
    if(!post) {
      return next(ApiError.notFound('Invalid post ID'));
    }
    return res.json(post);
  };

  async deletePost(req, res, next) {
    const {id} = req.params;
    const post = await Post.findOne({where: {id}});
    if(!post) {
      return next(ApiError.notFound('Invalid post ID'));
    }
    await Post.destroy({where: {id}});
    return res.json({
      message: `Post with ID ${id} was deleted`,
      info: {post},
    });
  };
};

module.exports = new PostController();