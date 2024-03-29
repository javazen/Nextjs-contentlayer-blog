import React from 'react'
import { cx, sortBlogs } from '@/src/utils/index';
import Link from 'next/link';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree'

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-16 sm:mt-32 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center'>
        <div className='flex w-full justify-between'>
            <h2 className='w-fit inline-block font-bold capitalize text-dark dark:text-light text-2xl md:text-4xl'>
            Recent Posts
            </h2>
            <Link href="/categories/all" 
            className='inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg'
            >view all</Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16'>
            {
                sortedBlogs.slice(4, 10).map((blog, index) => {
                    return <article key={index} className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
            }
        </div>
    </section>
  )
}

export default RecentPosts