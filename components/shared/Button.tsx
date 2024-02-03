
import Image from 'next/image';

interface Props {
    title: string;
    icon?: string;
    className: string;
}

const Button = ({ title, icon, className }: Props) => {
    return (
        <div className={`${className} flex p-3 rounded-md`}>
            {icon &&   
            <Image 
                src={icon ?? icon}
                alt='plusIcon'
                width={15}
                height={15}
                className={icon ? 'block': 'hidden'}
            />
            }
            <button className={`${icon ? 'ml-1' : ''} flex justify-center w-full`}>{title}</button>
        </div>
    )
}

export default Button;