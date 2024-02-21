import { cookies } from "next/headers";
import PostFeed from "@/components/PostFeed";
import '../globals.css';

export default function Home() {

  const authProfileId = cookies().get('authToken')?.value

  return (
    <main>
      <PostFeed feedType="default" authProfileId={authProfileId}/>
    </main>
  );
}
