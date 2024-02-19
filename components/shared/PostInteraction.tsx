import commentIcon from '@/public/assets/chat.png';
import shareIcon from '@/public/assets/send.png';
import Image from 'next/image';

interface Props {
    onCommentIconClick: React.MouseEventHandler<HTMLImageElement>;
    onShareIconClick: React.MouseEventHandler<HTMLImageElement>;
}

const PostInteraction = ({ onCommentIconClick, onShareIconClick }: Props) => {
    return (
        <div className='flex mt-3'>
            <Image 
                src={commentIcon} 
                alt='commentIcon' 
                width={23} 
                height={23} 
                className='mr-2 cursor-pointer' 
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
    )
}

export default PostInteraction;