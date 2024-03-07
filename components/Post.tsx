"use client"

import { useState } from "react";
import Card from "./Card";
import CommentCard from "./shared/CommentCard";
import HeadingIndicator from "./shared/HeadingIndicator";
import Input from "./shared/Input";
import { IPost } from "@/types/appTypes";
import { addCommentToPost } from "@/lib/actions/post.actions";
import { PostCommentValidation } from "@/lib/validations/post";

interface Props {
    topic: string;
    text: string;
    createdAt: string;
    postId: string;
    isAuthenticated?: string
}

const Post = ({ createdAt, postId, text, topic, isAuthenticated }: Props) => {

    const [postComment, setPostComment] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostComment(e.target.value);
    }

    const onComment = async () => {
        PostCommentValidation.parse({ postComment });
        try {
            const response = await addCommentToPost(postId, postComment);
            setPostComment("")
            console.log(response, "comment")
        } catch (error: any) {
            console.error(`Cannot post comment: ${error.message}`)
        }
    }

    return (
        <div className="mb-10">
            <Card
                topic={topic}
                text={text}
                createdAt={createdAt}
                id={postId}
                isCommentPage={true}
                onShareIconClick={() => console.log("Hello World!")}
            />
            {isAuthenticated && (
                <Input
                    inputType="text"
                    placeholder="Comment your thoughts"
                    className="w-full mt-3 px-3"
                    isComment={true}
                    onChange={(e) => handleChange(e)}
                    name="comment"
                    value={postComment}
                    onCommentSubmit={onComment}
                />
            )}
        </div>
    )
}

export default Post;