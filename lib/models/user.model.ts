import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String},
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;