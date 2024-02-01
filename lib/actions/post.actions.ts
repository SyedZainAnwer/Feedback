"use server"

import { IPost } from "@/types/appTypes"
import { connectToDB } from "../mongoose"
import Post from "../models/post.model"

export const createPost = async({ post, topic, postId }: IPost) => {
    try {
        connectToDB()

        const createdPost = await Post.create({
            post,
            postId,
            topic
        });

        return createdPost;

    } catch(error: any) {
        throw new Error(`Error creating post: ${error}`)
    }
}