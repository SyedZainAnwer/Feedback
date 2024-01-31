import Card from "@/components/Card";
import Button from "@/components/shared/Button";
import plusIcon from '@/public/assets/plus.svg'

export default function Home() {
  return (
    <main>
      <div className="flex justify-end mb-4">
        <Button title="Create Post" icon={plusIcon} />
      </div>
      <Card topic="Topic" postTitle="My New Post" createdAt="5days"/>
    </main>
  );
}
