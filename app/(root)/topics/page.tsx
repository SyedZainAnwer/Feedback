import HeadingIndicator from "@/components/shared/HeadingIndicator";
import { fetchTopics } from "@/lib/actions/post.actions";

const Page = async () => {

    const topics = await fetchTopics()

    return (
        <div>
            {topics?.map((topic, i) => (
                <div key={i} className="flex mt-2">
                    <p>{topic}</p>
                </div>
            ))}
        </div>
    )
}

export default Page;