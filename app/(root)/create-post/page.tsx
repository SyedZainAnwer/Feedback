import CreatePostForm from "@/components/forms/CreatePostForm";
import { cookies } from "next/headers";

const Page = () => {

    const authUserId = cookies().get('authUserId')?.value || "0";
    console.log(authUserId, "authUserId")

    return (
        <div className="md:p-1 md:mt-4 flex justify-center items-center">
            <div className="shadow-lg bg-white rounded-lg w-full md:w-1/2 overflow-hidden">
                <CreatePostForm userId={authUserId} />
            </div>
        </div>
    );
}

export default Page;