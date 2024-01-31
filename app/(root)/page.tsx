import Button from "@/components/shared/Button";
import plusIcon from '@/public/assets/plus.svg'

export default function Home() {
  return (
    <main>
      <Button title="Create" icon={plusIcon} />
    </main>
  );
}
