import React from 'react';
import HeadingIndicator from './shared/HeadingIndicator';
import Heading from './shared/Heading';
import { fetchTopics } from '@/lib/actions/post.actions';

const LeftSideBar = async () => {

  const topics = await fetchTopics();

  return (
    <div className="px-4">
      <Heading title='hot topics' />
      {topics?.map((topic, i) => (
        <div key={i} className="flex mt-2">
          <HeadingIndicator className="h-5" />
          <p>{topic}</p>
        </div>
      ))}
    </div>
  );
}

export default LeftSideBar;
