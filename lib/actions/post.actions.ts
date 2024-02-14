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
            topic: existingTopic._id,
        });

        await User.findByIdAndUpdate(authorId, {
            $push: { posts: createdPost._id }
        });

        await Topic.findByIdAndUpdate(existingTopic._id, {
            $push: { posts: createdPost._id }
        })

        console.log(createdPost, "createdPost")

        return createdPost;

    } catch(error: any) {
        console.error(`Error creating post: ${error.message}`)
    }
}

export const fetchTopics = async() => {
    try{
        connectToDB();
        const dataItems = await Topic.find();

        const topicName: string[] = dataItems.map(topic => topic.name );

        return topicName
    } catch(error: any) {
        console.log(`Error fetching topics array: ${error.message}`)
    }
};