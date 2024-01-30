import React from 'react'
import { format, parseISO } from "date-fns"
import Link from 'next/link'

const BlogDetails = ({blog, slug}) => {
    // console.log(blog);
  return (
    <div className='px-10 py-2 bg-accent text-light flex flex-wrap items-center justify-around text-xl font-medium'>
        <time className='m-3'>
            {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <span className='m-3'>
            10 views
        </span>
        <div className='m-3'>
            {blog.readingTime.text}
        </div>
        <Link href={`categories/${blog.tags[0]}`} className='m-3'>
        #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails