"use client"

import { useState } from "react";
import Card from "./Card";
import CommentCard from "./shared/CommentCard";
import HeadingIndicator from "./shared/HeadingIndicator";
import Input from "./shared/Input";
import { IPost } from "@/types/appTypes";

interface Props {
    topic: string;
    text: string;
    createdAt: string;
    id: string;
}

const Post = ({createdAt, id, text, topic}: Props) => {

    const [comment, setComment] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    return(
        <div className="mb-10">
            <Card
                topic={topic}
                text={text}
                createdAt={createdAt}
                id={id}
                isCommentPage={true}
            />
            <Input
                inputType="text"
                placeholder="Comment your thoughts"
                className="w-full mt-3 px-3"
                isComment={true}
                onChange={(e) => handleChange(e)}
                name="comment"
                value={comment}
            />
            <div className="flex mt-6">
                <HeadingIndicator className='ml-5' />
                <div className="ml-3">
                    <h1 className="font-bold text-lg mb-3">Replies</h1>
                    <CommentCard />
                    <CommentCard />
                </div>
            </div>
        </div>
    )
}

export default Post;