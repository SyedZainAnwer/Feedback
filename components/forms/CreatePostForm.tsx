"use client"

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/Input";
import { createPost } from "@/lib/actions/post.actions";
import { PostValidation } from "@/lib/validations/post";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const data = ["data1", "data2", "data3", "data4"]

const CreatePostForm = ({ userId }: { userId: string }) => {

    const router = useRouter();
    const pathname = usePathname();

    const [postValues, setPostValues] = useState({
        text: "",
        topic: [],
        authorId: userId,
    });

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
                topic: postValues.topic[],
                authorId: postValues.authorId,
                path: pathname
            })

            console.log(response, "create post response")
            router.push("/");

        } catch(error: any) {
            console.error(`Cannot create post: ${error.message}`)
        }
    }

    return (
        <main className="">
            <Heading title="Post Feedback" />
                <form className="mt-4" action={handlePostSubmit}>
                    <Input
                        inputType="text"
                        className="w-full py-3 mb-2"
                        dataItems={data}
                        placeholder="Select a topic or enter one"
                        name="topic"
                        value={postValues.topic}
                        onChange={(e) => handleChange(e)}
                    />
                    <Input
                        inputType="text"
                        className="w-full py-3 mb-2"
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