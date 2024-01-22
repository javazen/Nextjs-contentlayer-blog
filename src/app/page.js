import { allBlogs } from 'contentlayer/generated'
import Image from 'next/image'
import HomeCoverSection from '@/src/components/Home/HomeCoverSection'
import FeaturedPosts from '@/src/components/Home/FeaturedPosts'
import RecentPosts from '@/src/components/Home/RecentPosts'

export default function Home() {
    // console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}

/*
      <HomeCoverSection blogs={allBlogs} />

      */