import CreatePostForm from "@/components/forms/CreatePostForm";
import { cookies } from "next/headers";

const Page = () => {

    const authUserId = cookies().get('authUserId')?.value || "0";
    console.log(authUserId, "authUserId")

    return (
        <div>
            <CreatePostForm userId={authUserId} />
        </div>
    );
}

export default Page;