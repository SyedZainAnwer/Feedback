import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;