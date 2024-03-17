"use client"

import Avatar from "./shared/Avatar";
import SearchInput from "./shared/SearchInput";
import Button from "./shared/Button";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPosts, fetchTopics } from "@/lib/actions/post.actions";

const Navbar = ({isAuthenticated}: {isAuthenticated?: string}) => {

    const [data, setData] = useState<{
        posts: string[];
        topics: string[];
    }>({
        posts: [],
        topics: []
    });
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts: string[] = await fetchPosts();
                const topics: string[] = await fetchTopics();
                setData({ posts, topics });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [data]);
    

    const handleLogoutClick = () => {
        Cookies.remove("authToken");
        Cookies.remove("authUserId");
        router.replace("login")
    }

    return (
        <nav className="flex items-center p-2 mb-3 md:mb-0 md:bg-white md:shadow md:border-[1px] md:border-light_gray border-t-0">
            <h2 className="text-orange font-bold text-3xl flex-shrink-0 md:w-1/4 w-1/2 md:ml-2 px-3">
                <a href="/">
                    Feedback
                </a>
            </h2>
            <div className="hidden md:flex-1 md:flex md:justify-center">
                <SearchInput dataItems={data.posts && data.topics}/>
            </div>
            <div className="md:w-1/4 w-1/2 flex items-center justify-end">
                {isAuthenticated ? (
                    <Avatar onClick={handleLogoutClick}/>
                ) : (
                    <div className="flex">
                        <Link href="/login">
                            <Button title="Login" className=" border-light_gray mr-3" />
                        </Link>
                        <Link href="/register">
                            <Button title="Signup" className="bg-light_blue" />
                        </Link>
                    </div>
                )}
            </div>
        </nav>

    )
}

export default Navbar;