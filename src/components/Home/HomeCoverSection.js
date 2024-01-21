import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cx, sortBlogs } from '@/src/utils/index';
import Tag from '@/src/components/Elements/Tag'


const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const latestBlog = sortedBlogs[0];
    // console.log(latestBlog.image.filePath);
  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
      <Image src={latestBlog.image.filePath.replace("../public", "")} 
      placeholder='blur'
      blurDataURL={latestBlog.image.blurhashDataUrl}
      alt={latestBlog.title}
      fill
      className='w-full h-full object-center object-cover rounded-3xl '
      />
      <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0' />

      <div className='w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light'>
        <Tag link={`/categories/${latestBlog.tags[0]}`} name={latestBlog.tags[0]} />
        <h1>
          {latestBlog.title}
        </h1>
        <p>
          {latestBlog.description}
        </p>
      </div>
    </article>

    </div>
  )
}

export default HomeCoverSection
