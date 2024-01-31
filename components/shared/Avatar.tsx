import userIcon from '@/public/assets/avatar.svg'
import Image from 'next/image'

interface Props {
    size?: number
    title?: string
    className?: string
    onClick?: () => void
}
const Avatar = ({ size = 80, className, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${className} 
            rounded-full overflow-hidden flex justify-center items-center flex-col`}
            style={{ width: size ?? 50, height: size ?? 50 }}
        >
            <Image
                src={userIcon}
                alt="user icon"
                height={50}
                width={50}
            />
        </div>
    )
}

export default Avatar;
