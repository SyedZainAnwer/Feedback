"use server"

import { connectToDB } from "../mongoose";
import { IPost } from "@/types/appTypes";
import Post from "../models/post.model";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export const createPost = async({ text, topic, authorId, path }: IPost) => {
    try {
        connectToDB();

        const createdPost = await Post.create({
            text,
            author: authorId,
            topics: [topic]
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