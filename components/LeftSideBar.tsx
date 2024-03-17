"use client"

import React, { useEffect, useState } from 'react';
import HeadingIndicator from './shared/HeadingIndicator';
import Heading from './shared/Heading';
import { fetchTopics } from '@/lib/actions/post.actions';
import Link from 'next/link';
import downArrow from '@/public/assets/down-arrow.svg'
import Image from 'next/image';
import widgetIcon from '@/public/assets/widget-icon.svg'
import menu from '@/public/assets/menu.png'
import menuFilled from '@/public/assets/menu-filled.png'

interface Topic {
  name: string;
  posts: string[];
}

const LeftSideBar = () => {

  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    try {
      const fetchedTopics = async() => {
        const topic = await fetchTopics();
        setTopics(topic)
      }

      fetchedTopics()
    } catch (error) {
      
    }
  }, [topics])


  return (
    <div className="px-4">
      <div className='flex hover:bg-light_gray hover:cursor-pointer px-3 py-1 rounded-md'>
        <Image src={menu} alt='widgetIcon' width={20} height={1} className='mr-2 h-5 mt-1'/>
        <Heading title='Feeds' />
      </div>
      <div className='flex hover:bg-light_gray hover:cursor-pointer px-3 py-1 rounded-md mt-2'>
        <Image src={menuFilled} alt='widgetIcon' width={20} height={20} className='mr-2 h-5 mt-1'/>
        <Heading title='hot topics' />
      </div>
      {/* {topics?.map((topic, i) => (
        <div key={i} className="flex mt-2">
          <HeadingIndicator className="h-6" />
          <p>{topic.name}</p>
        </div>
      ))} */}
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
