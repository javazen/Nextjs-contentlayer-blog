import Image from 'next/image'
import Link from "next/link";
import { cx, sortBlogs } from '@/src/utils/index'
import Tag from '@/src/components/Elements/Tag'

const HomeCoverSection = ({blogs}) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  // console.log(sortedBlogs.length)
  return (
    <div className='w-full inline-block'>
    <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
        <Image 
        src = {blog.image.filePath.replace("../public", "")}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className='w-full h-full object-center object-cover rounded-3xl'
        />
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0' />

        <div className='w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light hover:scale-105 transition-all ease duration-200'>
          <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
          <Link href={blog.url} className='mt-6'>
          <h1 className='font-bold capitalize text-4xl'>
            <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
            {blog.title}
            </span>
          </h1>
          </Link>
          <p className=' inline-block mt-4 text-xl font-in'>
            {blog.description}
          </p>
        </div>
    </article>
    </div>
  )
}

export default HomeCoverSection