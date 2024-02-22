import Card from "@/components/Card";
import Post from "@/components/Post";
import CommentCard from "@/components/shared/CommentCard";
import HeadingIndicator from "@/components/shared/HeadingIndicator";
import Input from "@/components/shared/Input";
import { fetchPostById } from "@/lib/actions/post.actions";
import { cookies } from "next/headers";

const Page = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return "No Post Found";

    const isAuthenticated = cookies().get('authToken')?.value;
    const post = await fetchPostById(params.id);
    console.log(post)

    return (
        <div>
            <Post createdAt={post.createdAt} id={post.id} text={post.text} topic={post.topic}/>
        </div>
    )
}

export default Page;