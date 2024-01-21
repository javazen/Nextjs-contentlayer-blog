import React from 'react';
import Image from 'next/image';
import { cx, sortBlogs } from '@/src/utils/index';


const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const latestBlog = sortedBlogs[0];
    console.log(latestBlog.image.filePath);
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
      <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10' />

    </article>

    </div>
  )
}

export default HomeCoverSection
