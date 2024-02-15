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
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { posts: fetchedPosts } = await fetchPosts();
        setPosts(fetchedPosts)
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
      <div className="flex justify-between mb-4">
        <Heading title="Give your feedback" />
        <Button
          title="Create Post"
          icon={plusIcon}
          className="bg-light_blue"
          onClick={() => router.push("create-post")}
        />
      </div>

      {isLoading ? (
        <Loader/>
      ) : (
      <div className="grid md:grid-cols-2 gap-4 mb-5">
        {posts.map((post, index) => (
          <Card
            topic={post.topic}
            postTitle={post.text}
            createdAt="5days"
          />
        ))}
      </div>
      )}

    </main>
  );
}
