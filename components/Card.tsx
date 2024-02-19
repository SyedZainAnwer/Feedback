"use client"

import { useRouter } from "next/navigation";
import HeadingIndicator from "./shared/HeadingIndicator";
import PostInteraction from "./shared/PostInteraction";
import { calculateTime } from "@/lib/utils";

interface Props {
    topic: string;
    text: string;
    createdAt: string;
    id: string;
}

const Card = ({ topic, text, createdAt, id }: Props) => {
    
    const timeAgo = createdAt ? calculateTime(new Date(createdAt)) : '';
    const router = useRouter();

    const onCommentIconClick = () => {
        router.push(`post/${id}`)
    }

    const onShareIconClick = () => {

    }

    return (
        <div className="border border-light_gray rounded-lg p-6 mb-5">
            <div className="flex justify-between">
                <div className="flex">
                    <HeadingIndicator className="h-5" />
                    <h5 className="text-pink flex text-sm">{topic}</h5>
                </div>
                <p>{timeAgo}</p>
            </div>
                <p className="mt-2 text-xl font-semibold">{text}</p>
            <PostInteraction onCommentIconClick={onCommentIconClick} onShareIconClick={onShareIconClick}/>
        </div>
    );
}

export default Card;