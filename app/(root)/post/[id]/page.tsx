import Card from "@/components/Card";
import Input from "@/components/shared/Input";
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
                id={params.id}
            />
            <Input 
                inputType="text" 
                placeholder="Comment your thoughts" 
                className="w-full mt-3  px-3"
                isComment={true}
            />
        </div>
    )
}

export default Page;