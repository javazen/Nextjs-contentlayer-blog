import React from 'react'
import { cx, sortBlogs } from '@/src/utils/index';
import BlogLayoutOne from '@/src/components/Blog/BlogLayoutOne'
import BlogLayoutTwo from '@/src/components/Blog/BlogLayoutTwo'

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-16 sm:mt-32 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-dark dark:text-light text-2xl md:text-4xl'>
        Featured Posts
        </h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16'>
            <article className='col-span-2 sxl:col-span-1 row-span-2 relative'>
                <BlogLayoutOne blog={sortedBlogs[1]} />
            </article>
            <article className='col-span-2 sxl:col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog={sortedBlogs[2]} />
            </article>
            <article className='col-span-2 sxl:col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog={sortedBlogs[3]} />
            </article>
        </div>
    </section>
  )
}

export default FeaturedPosts