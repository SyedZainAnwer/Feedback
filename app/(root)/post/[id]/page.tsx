import Card from "@/components/Card";
import CommentCard from "@/components/shared/CommentCard";
import HeadingIndicator from "@/components/shared/HeadingIndicator";
import Input from "@/components/shared/Input";
import { fetchPostById } from "@/lib/actions/post.actions";

const Page = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return "No Post Found";

    const post = await fetchPostById(params.id);

    return (
        <div className="mb-10">
            <Card
                key={post._id}
                topic={post.topic}
                text={post.text}
                createdAt={post.createdAt}
                id={params.id}
                isCommentPage={true}
            />
            <Input
                inputType="text"
                placeholder="Comment your thoughts"
                className="w-full mt-3  px-3"
                isComment={true}
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

export default Page;