import commentIcon from '@/public/assets/chat.png';
import shareIcon from '@/public/assets/send.png';
import Image from 'next/image';

interface Props {
    onCommentIconClick: React.MouseEventHandler<HTMLImageElement>;
    onShareIconClick: React.MouseEventHandler<HTMLImageElement>;
    numberOfComments?: number
}

const PostInteraction = ({ onCommentIconClick, onShareIconClick, numberOfComments }: Props) => {
    return (
        <div className='flex'>
        <div className='flex mt-3 justify-items-start'>
            <Image 
                src={commentIcon} 
                alt='commentIcon' 
                width={23} 
                height={23} 
                className='mr-1 cursor-pointer' 
                onClick={onCommentIconClick}
            />
            <Image 
                src={shareIcon} 
                alt='shareIcon'
                className='cursor-pointer'
                width={20} 
                height={15}
                onClick={onShareIconClick}
            />
        </div>
        <div className='flex justify-items-end'>
            <span className='mr-2 text-xs flex font-semibold items-center justify-end'>{numberOfComments}</span>
        </div>
        </div>
    )
}

export default PostInteraction;