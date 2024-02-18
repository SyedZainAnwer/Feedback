import Card from "@/components/Card";
import { fetchPostById } from "@/lib/actions/post.actions";

const Page = async({ params }: {params: {id: string}}) => {
    if(!params.id) return "null";

    const post = await fetchPostById(params.id)

    return (
        <div>
            <Card
                key={post._id}
                topic={post.topic}
                text={post.text}
                createdAt={post.createdAt}
            />
        </div>
    )
}

export default Page;