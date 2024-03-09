import commentIcon from '@/public/assets/comment.svg';
import shareIcon from '@/public/assets/share.svg';
import Image from 'next/image';

interface Props {
    onCommentIconClick: React.MouseEventHandler<HTMLImageElement>;
    onShareIconClick: React.MouseEventHandler<HTMLImageElement>;
    numberOfComments?: number
}

const PostInteraction = ({ onCommentIconClick, onShareIconClick, numberOfComments }: Props) => {
    return (
        <div className='flex'>
            <div className='flex justify-items-start mt-4'>
                <div className='bg-light_gray px-4 rounded-3xl cursor-pointer mr-2 flex' onClick={onCommentIconClick}>
                    <Image
                        src={commentIcon}
                        alt='commentIcon'
                        width={15}
                        height={15}
                        className='mt-[3px] flex items-center justify-center mr-2'
                        
                    />
                    <p className='text-mid_gray text-sm flex items-center'>{numberOfComments}</p>
                </div>
                <div className='bg-light_gray pr-3 pl-2 py-2 rounded-3xl flex'>
                    <Image
                        src={shareIcon}
                        alt='shareIcon'
                        className='cursor-pointer'
                        width={20}
                        height={15}
                        onClick={onShareIconClick}
                    />
                    <p className='text-mid_gray text-sm ml-1 flex items-center'>Share</p>
                </div>
            </div>
        </div>
    )
}

export default PostInteraction;