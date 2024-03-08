import React from 'react';
import HeadingIndicator from './shared/HeadingIndicator';
import Heading from './shared/Heading';
import { fetchTopics } from '@/lib/actions/post.actions';
import Link from 'next/link';
import downArrow from '@/public/assets/down-arrow.svg'
import Image from 'next/image';

const LeftSideBar = async () => {

  const topics = await fetchTopics();

  return (
    <div className="px-4">
      <Heading title='hot topics' />
      {topics?.map((topic, i) => (
        <div key={i} className="flex mt-2">
          <HeadingIndicator className="h-5" />
          <p>{topic.name}</p>
        </div>
      ))}
      {topics?.length && topics.length > 5 && (
        <Link href={"topics"}>
          <div className='flex mt-2'>
            <p className='text-gray mr-2'>See More</p>
            <Image src={downArrow} alt='downArrow' width={15} height={15} className='mt-1'/>
          </div>
        </Link>
      )}
    </div>
  );
}

export default LeftSideBar;
