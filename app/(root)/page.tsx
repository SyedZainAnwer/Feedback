import { cookies } from "next/headers";
import PostFeed from "@/components/PostFeed";
import '../globals.css';

export default function Home() {

  const authProfileId = cookies().get('authToken')?.value

  return (
    <main className="md:p-5">
      <PostFeed feedType="default" authProfileId={authProfileId}/>
    </main>
  );
}
