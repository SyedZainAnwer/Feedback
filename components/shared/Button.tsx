
import Image from 'next/image';

interface Props {
    title: string;
    icon?: string;
}

const Button = ({ title, icon }: Props) => {
    return (
        <div className='flex bg-light_blue p-3 rounded-md'>
            {icon &&   
            <Image 
                src={icon ?? icon}
                alt='plusIcon'
                width={15}
                height={15}
                className={icon ? 'block': 'hidden'}
            />
            }
            <button className='ml-1'>{title}</button>
        </div>
    )
}

export default Button;