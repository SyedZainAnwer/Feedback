import { cookies } from "next/headers";
import PostFeed from "@/components/PostFeed";
import '../globals.css';
import LeftSideBar from "@/components/LeftSideBar";

export default function Home() {

  const authProfileId = cookies().get('authToken')?.value

  return (
    <main className="flex">
      <section className="md:w-1/5 lg:block hidden md:mt-4 p-3 h-screen">
        <LeftSideBar />
      </section>
      <section className="lg:w-3/5 w-full md:mt-4 px-4 md:ml-5">
        <PostFeed feedType="default" authProfileId={authProfileId} />
      </section>
    </main>
  );
}
