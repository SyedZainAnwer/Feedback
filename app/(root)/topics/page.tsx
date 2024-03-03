import HeadingIndicator from "@/components/shared/HeadingIndicator";
import SearchInput from "@/components/shared/SearchInput";
import { fetchTopics } from "@/lib/actions/post.actions";

const Page = async () => {

    const topics = await fetchTopics()

    return (
        <div className="shadow-lg bg-white p-5 rounded-lg md:mt-3">
            <h1 className="text-lg text-black mb-5 font-bold bg-light_gray p-2">Browse Topics</h1>

            <SearchInput />

            <div className="mt-5">
            {topics?.map((topic, i) => (
                <div key={i} className="flex mt-2">
                    <p className="text-sm">{topic}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Page;