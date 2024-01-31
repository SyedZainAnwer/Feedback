import HeadingIndicator from "./shared/HeadingIndicator";
import PostInteraction from "./shared/PostInteraction";

interface Props {
    topic: string;
    postTitle: string;
    createdAt: string;
}

const Card = ({ topic, postTitle, createdAt }:Props) => {
    return(
        <div className="border border-light_gray rounded-lg p-6">
            <div className="flex justify-between">
                <div className="flex">
                    <HeadingIndicator className="h-5"/>
                    <h5 className="text-pink flex items-center text-sm">{topic}</h5>
                </div>
                <p>{createdAt} ago</p>
            </div>
            <p className="mt-2 text-xl font-semibold">{postTitle}.</p>
            <PostInteraction />
        </div>
    )
}

export default Card;