"use server"

import { connectToDB } from "../mongoose";
import { IPost } from "@/types/appTypes";
import Post from "../models/post.model";
import User from "../models/user.model";

export const createPost = async({ text, topic, authorId, path }: IPost) => {
    try {
        connectToDB();

        const createdPost = await Post.create({
            text,
            author: authorId,
            topics: Array.isArray(topic) ? topic : [topic], 
        });

        await User.findByIdAndUpdate(authorId, {
            $push: { posts: createdPost._id }
        });

        console.log(createdPost, "createdPost")

        return createdPost;

    } catch(error: any) {
        console.error(`Error creating post: ${error.message}`)
    }
}