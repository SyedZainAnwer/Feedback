"use client"

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/Input";
import { useForm, Form } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { PostValidation } from "@/lib/validations/post";
import { createPost } from "@/lib/actions/post.actions";

const data = ["data1", "data2", "data3", "data4"]

const CreatePostForm = ({ userId }: { userId?: string }) => {

    const form = useForm({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            post: '',
            accountId: userId,
        },
    });

    // const handleSubmit = async() => {
    //     await createPost({
    //         post: "post" || "",
    //         postId: post.id,
    //         topic: topic
    //     })
    // }

    return (
        <main className="">
            <Heading title="Post Feedback" />
            <Form {...form}>
                <form className="mt-4">
                    <Input
                        inputType="text"
                        className="w-full py-3"
                        dataItems={data}
                        placeholder="Select a topic or enter one"
                        name="topic"
                    />
                    <Input
                        inputType="text"
                        className="w-full py-3"
                        placeholder="Enter post title"
                        name="post"
                    />

                    <div className="flex justify-end">
                        {/* <Button title="Cancel" className="bg-light_gray mr-2"/> */}
                        <Button title="Submit" className="bg-light_blue" />
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default CreatePostForm;