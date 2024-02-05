import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import Categories from '@/src/components/Blog/Categories'


const CategoryPage = ({params}) => {
    // console.log(params)
    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified)
            }
            if (params.slug === "all")
                return true;
            return slugified === params.slug
        })
    })
    // console.log("allCategories: "+allCategories )
    return (
        <article className='mt-12 flex flex-col text-dark'>
        <div className='px-32 flex flex-col'>
            <h1 className='mt-6 font-semibold text-5xl'>
                #{params.slug}
            </h1>
            <span className='mt-2 inline-block'>
                Discover more categories and expand your knowledge!
            </span>
        </div>
        <Categories categories={allCategories} currentSlug={params.slug} />
    </article>

    )
}

export default CategoryPage;