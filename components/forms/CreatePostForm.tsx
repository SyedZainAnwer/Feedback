"use client"

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/Input";
import { createPost, fetchTopics } from "@/lib/actions/post.actions";
import { PostValidation } from "@/lib/validations/post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreatePostForm = ({ userId }: { userId: string }) => {

    const router = useRouter();
    const [ topics, setTopics ] = useState<string[] | undefined>([]);

    const [postValues, setPostValues] = useState({
        text: "",
        topic: "",
        authorId: userId,
    });

    useEffect(() => {
        const fetchTopicsData = async () => {
            const topicsData = await fetchTopics();
            if (topicsData) {
                const topicNames = topicsData.map(topic => topic.name);
                setTopics(topicNames);
            }
        };
    
        fetchTopicsData();
    }, []);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPostValues((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    
    const handlePostSubmit = async() => {
        try {
            PostValidation.parse(postValues);

            const response = await createPost({
                text: postValues.text,
                topic: postValues.topic,
                authorId: postValues.authorId
            })

            console.log(response, "create post response")
            router.push("/");

        } catch(error: any) {
            console.error(`Cannot create post: ${error.message}`)
        }
    }

    return (
        <main className="w-full">
            <Heading title="Post Feedback" className="flex justify-center items-center"/>
                <form className="mt-4" action={handlePostSubmit}>
                    <Input
                        inputType="text"
                        className="w-full py-3 mb-2 rounded-sm p-2"
                        dataItems={topics}
                        placeholder="Select a topic or enter one"
                        name="topic"
                        value={postValues.topic}
                        onChange={(e) => handleChange(e)}
                    />
                    <Input
                        inputType="text"
                        className="w-full py-3 mb-2 rounded-sm p-2"
                        placeholder="Enter post title"
                        name="text"
                        value={postValues.text}
                        onChange={(e) => handleChange(e)}
                    />

                    <div className="flex justify-end">
                        <Button title="Submit" className="bg-light_blue" />
                    </div>
                </form>
        </main>
    )
}

export default CreatePostForm;