import Image from "next/image";
import loader from '@/public/assets/postLoader.svg'

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className="h-screen w-full flex justify-center">
            <div className={`${className ?? className} text-center`}>
                <Image src={loader} alt="loader" width={50} height={50} />
            </div>
        </div>
    )
}

export default Loader;