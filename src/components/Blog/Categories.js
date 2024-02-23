import React from 'react'
import { slug } from 'github-slugger'
import Category from '@/src/components/Blog/Category'

const Categories = ({categories, currentSlug}) => {
    // console.log("Categories: "+categories )
    // console.log("currentSlug: "+currentSlug )
  return (
    <div className='px-0 md:px-10 sxl:px-20 mt-10 text-dark dark:text-light 
    border-t-2 border-b-2 border-solid border-dark dark:border-light
    py-4 items-start flex flex-wrap font-medium mx-5 md:mx-10'>
        {categories.map(cat => 
            <Category 
            key={cat} 
            link={`/categories/${cat}`} 
            name={cat} 
            active={currentSlug === slug(cat)}
            />
        )}
    </div>
  )
}

export default Categories