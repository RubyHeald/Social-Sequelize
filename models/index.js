const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

// A User can have one Profile and vice versa.
// A User can have many Post instances, but a Post can only have one User.
// A Post can have many Comment instances, but a Comment can only have one Post.
// A User can have many Like instances and vice versa.

Profile.hasOne(User)
User.belongsTo(Profile)

User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(Like, { through: 'LikedUsers' });
Like.belongsToMany(User, { through: 'LikedUsers' });

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}