import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String },
    createdAt: { type: Date, default: Date.now },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;