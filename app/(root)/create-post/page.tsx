import CreatePostForm from "@/components/forms/CreatePostForm";
import { cookies } from "next/headers";

const Page = () => {

    const authUserId = cookies().get('authUserId')?.value || "0";
    console.log(authUserId, "authUserId")

    return (
        <div className="md:shadow-lg md:p-10 md:mt-4 md:bg-white flex justify-center items-center">
            <CreatePostForm userId={authUserId} />
        </div>
    );
}

export default Page;