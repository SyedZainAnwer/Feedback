import React from 'react';
import HeadingIndicator from './shared/HeadingIndicator';
import Heading from './shared/Heading';
import { fetchTopics } from '@/lib/actions/post.actions';
import Link from 'next/link';
import downArrow from '@/public/assets/down-arrow.svg'
import Image from 'next/image';
import widgetIcon from '@/public/assets/widget-icon.svg'

const LeftSideBar = async () => {

  const topics = await fetchTopics();

  return (
    <div className="px-4">
      <div className='flex bg-light_gray px-3 py-1 rounded-md'>
        <Image src={widgetIcon} alt='widgetIcon' width={20} height={20} className='mr-2'/>
        <Heading title='hot topics' />
      </div>
      {topics?.map((topic, i) => (
        <div key={i} className="flex mt-2">
          <HeadingIndicator className="h-6" />
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
