import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    topic: { type: String },
    author: { type: String },
    createdAt: { type: Date, default: Date.now },
    parentId: { type: String },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

export default Post;