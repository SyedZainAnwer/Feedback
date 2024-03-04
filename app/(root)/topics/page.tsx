import HeadingIndicator from "@/components/shared/HeadingIndicator";
import SearchInput from "@/components/shared/SearchInput";
import { fetchTopics } from "@/lib/actions/post.actions";

const Page = async () => {

    const topics = await fetchTopics();
    console.log(topics)
    // console.log(topics?.posts, "topics posts")

    return (
        <div className="shadow-lg bg-white rounded-lg md:mt-3 overflow-hidden">
            <h1 className="text-lg text-black mb-2 font-bold bg-light_gray p-2">Browse Topics</h1>

            <div className="p-5">
                <SearchInput />

                <div className="mt-5">
                    {topics?.map((topic, i) => (
                        <div key={i} className="flex mt-2">
                            <p className="text-sm">{topic.name}</p>
                            <p>{topic.posts?.length}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Page;