import Card from "@/components/Card";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import plusIcon from '@/public/assets/plus.svg'

export default function Home() {
  return (
    <main>
      <div className="flex justify-between mb-4">
        <Heading title="Give your feedback"/>
        <Button title="Create Post" icon={plusIcon} className="bg-light_blue"/>
      </div>
      <Card topic="Topic" postTitle="My New Post" createdAt="5days"/>
    </main>
  );
}
