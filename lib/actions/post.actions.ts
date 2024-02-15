"use server"

import { connectToDB } from "../mongoose";
import { IPost } from "@/types/appTypes";
import Post from "../models/post.model";
import User from "../models/user.model";
import Topic from "../models/topic.model";

export const createPost = async({ text, topic, authorId }: IPost) => {
    try {
        connectToDB();

        let existingTopic = await Topic.findOne({ name: topic })

        if(!existingTopic) {
            existingTopic = await Topic.create({ name: topic })
        }
        
        const createdPost = await Post.create({
            text,
            author: authorId,
            topic: existingTopic.name,
        });
        const postId = JSON.stringify(createdPost._id)

        await User.findByIdAndUpdate(authorId, {
            $push: { posts: postId }
        });

        await Topic.findByIdAndUpdate(existingTopic._id, {
            $push: { posts: postId }
        })

        console.log(createdPost, "createdPost")

        return createdPost;

    } catch(error: any) {
        console.error(`Error creating post: ${error.message}`)
    }
}

export const fetchPosts = async() => {
    try {
        connectToDB();

        const posts = await Post.find({ parentId: {$in: [null, undefined]} })
        .sort({ createdAt: "desc" });

        // const postId = await 

        return { posts: posts || [] };

    } catch(error: any) {
        console.log(`Error fetching post: ${error.message}`);
        return { posts: [] };
    }
}

export const fetchTopics = async() => {
    try{
        connectToDB();
        const dataItems = await Topic.aggregate([
            {
                $lookup: {
                    from: 'posts',
                    localField: 'posts',
                    foreignField: '_id',
                    as: 'posts'
                }
            },
            {
                $project: {
                    name: 1,
                    postCount: { $size: "$posts" }
                }
            },
            {
                $sort: { postCount: -1 } // Sort topics by postCount in descending order
            }
        ]);
        

        const topicName: string[] = dataItems.map(topic => topic.name );

        return topicName
    } catch(error: any) {
        console.log(`Error fetching topics array: ${error.message}`)
    }
};