"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { fetchPosts } from "@/lib/actions/post.actions";

import SearchInput from "./shared/SearchInput";
import Card from "./Card";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Loader from "./shared/Loader";
import plusIcon from '@/public/assets/plus.svg'

interface Props {
    feedType: string;
    authProfileId: string | undefined;
}

const PostFeed = ({ feedType, authProfileId }: Props) => {

    const router = useRouter();
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (name: string) => {
            if (name === 'default') {
                try {
                    setLoading(true)
                    const { posts: fetchedPosts } = await fetchPosts();
                    setPosts(fetchedPosts);
                } catch (error: any) {
                    setLoading(false)
                    console.log(`Cannot fetch posts: ${error.message}`)
                } finally {
                    setLoading(false)
                }
            }
        }

        fetchData(feedType);
    }, []);

    return (
        <div>
            <div className="md:hidden block mb-5">
                <SearchInput />
            </div>
            <div className="flex md:justify-between justify-end mb-4">
                <Heading title="Give your feedback" className="hidden md:flex" />
                <Button 
                    className="block md:hidden bg-light_blue mr-2 text-black" 
                    title="Browse Topics" 
                    onClick={() => router.push("topics")}
                />
                {authProfileId && (
                    <Button
                        title="Create Post"
                        icon={plusIcon}
                        className="bg-light_blue"
                        onClick={() => router.push("create-post")}
                    />
                )}
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {posts.length === 0 ? (
                        <p className="flex justify-center items-center mt-5 text-gray">No Post Found</p>
                    ) : (
                        posts.map((post, index) => (
                            <Card
                                key={index}
                                topic={post.topic}
                                text={post.text}
                                createdAt={post.createdAt}
                                id={post._id}
                                numberOfComments={post.children.length}
                            />
                        ))
                    )}
                </>
            )}

            {/* <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/>
            <Card createdAt="12" id="dasd" text="sdaasa" topic="adasda"/> */}
        </div>
    )
}

export default PostFeed;