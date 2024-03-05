import SearchInput from "@/components/shared/SearchInput";
import { fetchTopics } from "@/lib/actions/post.actions";
import backIcon from '@/public/assets/back-arrow.png';
import Image from "next/image";
import Link from "next/link";

const Page = async () => {

    const topics = await fetchTopics();
    console.log(topics)
    // console.log(topics?.posts, "topics posts")

    return (
        <div className="shadow-lg bg-white rounded-lg md:mt-3 overflow-hidden">
            <div className="flex bg-light_blue p-4 w-full">
                <div className="flex items-center">
                    <Link href={"/"}>
                    <Image src={backIcon} alt="backIcon" height={25} width={21} />
                    </Link>
                </div>
                <div className="flex items-center">
                    <h1 className="text-lg text-black font-semibold ml-2">Browse Topics</h1>
                </div>
            </div>

            <div className="p-5">
                <SearchInput />

                <div className="mt-5">
                    <div className="flex w-full">
                        <p className="w-1/2">All</p>
                        <p className="flex w-1/2 justify-end text-pink">{topics?.length}</p>
                    </div>
                    {topics?.map((topic, i) => (
                        <div key={i} className="flex mt-2 w-full">
                            <p className="text-sm w-1/2">{topic.name}</p>
                            <p className="flex w-1/2 justify-end text-pink">{topic.posts?.length}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Page;