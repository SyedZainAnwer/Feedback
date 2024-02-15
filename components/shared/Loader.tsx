import Image from "next/image";
import loader from '@/public/assets/loader.svg'

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className={`${className ?? className} text-center`}>
                <Image src={loader} alt="loader" width={30} height={30} />
            </div>
        </div>
    )
}

export default Loader;