"use client"

import { useRouter } from "next/navigation";
import { useRouter as Router } from "next/router";
import HeadingIndicator from "./shared/HeadingIndicator";
import PostInteraction from "./shared/PostInteraction";
import { calculateTime } from "@/lib/utils";

interface Props {
    topic: string;
    text: string;
    createdAt: string;
    id: string;
    isCommentPage?: boolean;
    numberOfComments?: number
}

const Card = ({ topic, text, createdAt, id, isCommentPage, numberOfComments }: Props) => {

    const timeAgo = createdAt ? calculateTime(new Date(createdAt)) : '';
    const router = useRouter();
    const share = Router()

    const onCommentIconClick = () => {
        router.push(`post/${id}`)
    }

    const onShareIconClick = () => {
        const postLink = process.env.BASE_URL + share.asPath;

        navigator.clipboard.writeText(postLink);

        console.log("post copied")
    }

    return (
        <div className="border-none shadow-lg bg-white rounded-lg p-6 mb-5">
            <div className="flex justify-between">
                <div className="flex">
                    <HeadingIndicator className="h-5" />
                    <h5 className="text-pink flex text-sm">{topic}</h5>
                </div>
                <p className="text-xs">{timeAgo}</p>
            </div>
            <p className="mt-2 text-xl font-semibold">{text}</p>
            {!isCommentPage && (
                <PostInteraction 
                    numberOfComments={numberOfComments} 
                    onCommentIconClick={onCommentIconClick} 
                    onShareIconClick={onShareIconClick} 
                />
            )}
        </div>
    );
}

export default Card;