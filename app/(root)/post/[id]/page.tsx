import Post from "@/components/Post";
import CommentCard from "@/components/shared/CommentCard";
import HeadingIndicator from "@/components/shared/HeadingIndicator";
import { fetchPostById } from "@/lib/actions/post.actions";
import { cookies } from "next/headers";

const Page = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return "No Post Found";

    const isAuthenticated = cookies().get('authToken')?.value;
    const post = await fetchPostById(params.id);

    return (
        <div>
            <Post createdAt={post.createdAt} postId={post.id} text={post.text} topic={post.topic}/>
            <div className="flex mt-6">
                <HeadingIndicator className='ml-5' />
                <div className="ml-3">
                    <h1 className="font-bold text-lg mb-3">Replies</h1>
                    {post.children.map((comment: any) => (
                        <CommentCard text={comment.text} key={comment._id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;