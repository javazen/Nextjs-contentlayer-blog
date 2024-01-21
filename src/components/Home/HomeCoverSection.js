import React from 'react';
import Image from 'next/image';
import { cx, sortBlogs } from '@/src/utils/index';


const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const latestBlog = sortedBlogs[0];
    console.log(latestBlog.image.filePath);
  return (
    <article>
      <Image src={latestBlog.image.filePath.replace("../public", "")} 
      placeholder='blur'
      blurDataURL={latestBlog.image.blurhashDataUrl}
      alt={latestBlog.title}
      fill
      className='w-full h-full object-center object-cover rounded-3xl '
      />

    </article>
  )
}

export default HomeCoverSection
