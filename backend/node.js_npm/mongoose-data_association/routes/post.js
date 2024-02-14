const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    // Define the reference to the User model for the user who created the post
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
