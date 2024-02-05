import { allBlogs } from 'contentlayer/generated'
import Tag from '@/src/components/Elements/Tag'
import Image from 'next/image';
import BlogDetails from '@/src/components/Blog/BlogDetails'
import RenderMdx from '@/src/components/Blog/RenderMdx'
import { slug } from 'github-slugger'


export default function BlogPage({ params }) {

    const blog = allBlogs.find( (blog) => blog._raw.flattenedPath === params.slug)
    // console.log(blog);
    return (
    <article>
        <div className='mb-8 text-center relative w-full h-[70vh] bg-dark'>
            <div className='w-full z-10 flex flex-col items-center justify-center absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Tag 
                    name={blog.tags[0]} 
                    link={`/categories/${slug(blog.tags[0])}`}
                    className="px-6 py-2 text-sm"
                />
                <h1 className='inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal
                relative w-5/6'>
                    {blog.title}
                </h1>
            </div>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/60' />
            <Image src={blog.image.filePath.replace("../public", "")} 
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className='aspect-square w-full h-full object-center object-cover'
            />
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className='grid grid-cols-12'>
        <div className='col-span-4'>
                <details className='border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky 
                top-6 max-h-[80vh] overflow-hidden overflow-y-auto' open>
                    <summary className='text-lg font-semibold capitalize cursor-pointer'>Table of Contents</summary>
                    <ul className='mt-4 font-in text-base'>
                        {
                            blog.toc.map(heading => {
                                return <li key={`#${heading.slug}`} className='py-1'>
                                    <a href={`${heading.slug}`}
                                    data-level={heading.level}
                                    className="data-[level=two]:pl-0 data-[level=two]:pt-2 
                                    data-[level=two]:border-t data-[level=two]:border-solid data-[level=two]:border-dark/40
                                    data-[level=three]:pl-6
                                    flex items-center justify-start
                                    ">
                                    {
                                    heading.level === "three" ? <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>&nbsp;</span> : null
                                    }
                                    <span className='hover:underline'>{heading.text}</span>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </details>
            </div>
            <RenderMdx blog={blog} />
        </div>
    </article>
    )
    
  }