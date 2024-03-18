"use client"

import React, { useEffect, useState } from 'react';
import HeadingIndicator from './shared/HeadingIndicator';
import Heading from './shared/Heading';
import { fetchTopics } from '@/lib/actions/post.actions';
import Link from 'next/link';
import downArrow from '@/public/assets/down-arrow.svg';
import Image from 'next/image';
import menu from '@/public/assets/menu.png';
import menuFilled from '@/public/assets/menu-filled.png';
import { usePathname } from 'next/navigation';

interface Topic {
  name: string;
  posts: string[];
}

const LeftSideBar = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [toggleTopics, setToggleTopics] = useState(true);
  const [isActive, setIsActive] = useState(false)

  const path = usePathname()

  useEffect(() => {
    const fetchTopicsData = async () => {
      try {
        const fetchedTopics = await fetchTopics();
        setTopics(fetchedTopics);
      } catch (error) {
        console.error('Cannot fetch topics:', error);
      }
    };
  
    fetchTopicsData();
  }, []);
  

  const pageInfo = () => {
    if(path === "/"){
      setIsActive(true);
    }
  }

  const toggleMenu = () => {
    setToggleTopics(!toggleTopics)
  }

  return (
    <div className="px-4">
      <div className={`${!isActive && "bg-light_gray"} flex hover:bg-light_gray hover:cursor-pointer px-3 py-1 rounded-md`} onClick={pageInfo}>
        {isActive ? (
          <Image src={menu} alt="menu" width={20} height={20} className="mr-2 h-5 mt-1" />
        ) : (
          <Image src={menuFilled} alt="menu" width={20} height={20} className="mr-2 h-5 mt-1" />
        )}
        <Heading title="Feeds" />
      </div>
      <div
        className="flex hover:bg-light_gray hover:cursor-pointer px-3 py-1 rounded-md mt-2"
        onClick={toggleMenu}
      >
        {toggleTopics ? (
          <Image src={menu} alt="menuFilled" width={20} height={20} className="mr-2 h-5 mt-1" />
        ): (
          <Image src={menuFilled} alt="menuFilled" width={20} height={20} className="mr-2 h-5 mt-1" />
        )}
        <Heading title="Hot Topics" />
        <Image src={downArrow} alt="downArrow" width={15} height={15} className="mt-1 ml-2" />
      </div>
      {!toggleTopics && (
        topics?.map((topic, i) => (
          <div key={i} className="flex mt-2 px-4">
            {/* <HeadingIndicator className="h-6" /> */}
            <p>{topic.name}</p>
          </div>
        ))
      )}

      {topics?.length > 5 && (
        <Link href="/topics">
          <div className="flex mt-2">
            <p className="text-gray mr-2">See More</p>
            <Image src={downArrow} alt="downArrow" width={15} height={15} className="mt-1" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default LeftSideBar;
