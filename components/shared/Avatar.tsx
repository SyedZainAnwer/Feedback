"use client"

import { useState } from 'react';
import userIcon from '@/public/assets/avatar.svg';
import Image from 'next/image';

interface Props {
    size?: number;
    className?: string;
    onClick?: () => void
}

const Avatar = ({ size = 80, className, onClick }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">
            <div
                onClick={openModal}
                className={`${className} rounded-full overflow-hidden flex justify-center items-center flex-col cursor-pointer`}
                style={{ width: size ?? 50, height: size ?? 50 }}
            >
                <Image src={userIcon} alt="user icon" height={50} width={50} />
            </div>
            {isModalOpen && (
                <div className="absolute top-full right-0">
                    <div className="bg-white p-3 rounded-lg shadow-lg">
                        <div>
                            <button onClick={onClick} className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded-md">Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Avatar;



