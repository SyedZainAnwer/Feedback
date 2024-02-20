"use client"

import Card from "@/components/Card";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import { fetchPosts } from "@/lib/actions/post.actions";
import plusIcon from '@/public/assets/plus.svg'
import { IPost } from "@/types/appTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import '../globals.css'
import SearchInput from "@/components/shared/SearchInput";
import Loader from "@/components/shared/Loader";

export default function Home() {

  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  return (
    <main>
      <div className="md:hidden block mb-5">
        <SearchInput />
      </div>
      <div className="flex md:justify-between justify-end mb-4">
        <Heading title="Give your feedback" className="hidden md:flex" />
        <Button className="block md:hidden bg-light_blue mr-2 text-black" title="Browse Topics" />
        <Button
          title="Create Post"
          icon={plusIcon}
          className="bg-light_blue"
          onClick={() => router.push("create-post")}
        />
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
            />
          ))
        )}
        </>
      )}

    </main>
  );
}
