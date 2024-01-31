import commentIcon from '@/public/assets/comment.svg';
import shareIcon from '@/public/assets/share.svg';
import Image from 'next/image';

const PostInteraction = () => {
    return (
        <div className='flex mt-3'>
            <Image src={commentIcon} alt='commentIcon' width={23} height={23} className='mr-2'/>
            <Image src={shareIcon} alt='shareIcon' width={23} height={23}/>
        </div>
    )
}

export default PostInteraction;