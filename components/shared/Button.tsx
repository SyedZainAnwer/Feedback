"use client"

import Image from 'next/image';
import { useFormStatus } from 'react-dom';
import loader from '@/public/assets/loader.svg'

interface Props {
    title: string;
    icon?: string;
    className: string;
    handleSubmit?: () => void
}

const Button = ({ title, icon, className, handleSubmit }: Props) => {

    const { pending } = useFormStatus();

    return (
        <div className={`${className} flex p-3 rounded-md`}>
            {pending ? (
                <div className='w-full flex justify-center items-center'>
                    <Image src={loader} width={25} height={25} alt='loader' />
                </div>
                // <p>Loading...</p>
            ) : (
                <>
                {icon && (
                    <Image
                        src={icon ?? icon}
                        alt='plusIcon'
                        width={15}
                        height={15}
                        className={icon ? 'block' : 'hidden'}
                    />
                )}
                <button 
                    className={`${icon ? 'ml-1' : ''} flex justify-center w-full`}
                    onClick={handleSubmit}
                >
                    {title}
                </button>
            </>
            )}

        </div>
    )
}

export default Button;