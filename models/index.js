const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'  //If we delete the user, we want to delete their posts
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
