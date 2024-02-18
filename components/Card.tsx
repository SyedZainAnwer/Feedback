import { IPost } from "@/types/appTypes";
import HeadingIndicator from "./shared/HeadingIndicator";
import PostInteraction from "./shared/PostInteraction";
import { calculateTime } from "@/lib/utils";

const Card = ({ topic, text, createdAt }: IPost) => {
    
    const timeAgo = createdAt ? calculateTime(new Date(createdAt)) : '';

    return (
        <div className="border border-light_gray rounded-lg p-6">
            <div className="flex justify-between">
                <div className="flex">
                    <HeadingIndicator className="h-5" />
                    <h5 className="text-pink flex text-sm">{topic}</h5>
                </div>
                <p>{timeAgo}</p>
            </div>
            <p className="mt-2 text-xl font-semibold">{text}</p>
            <PostInteraction />
        </div>
    );
}

export default Card;