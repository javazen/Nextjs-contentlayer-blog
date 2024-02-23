import React from 'react'
import Link from 'next/link';
import { cx } from '@/src/utils/index';


const Category = ({link="#", name, active, ...props}) => {
    // console.log("Category: "+link+" "+name )
  return (
    <Link 
        href={link} 
        className={cx(
            `inline-block py-1.5 md:py-2 px-6 md:px-10 m-2 rounded-full 
            border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200`, 
            props.className,
            active ? 
            "bg-dark dark:bg-light text-light dark:text-dark" : 
            "bg-light dark:bg-dark text-dark dark:text-light"
        )}>
        #{name}
    </Link>
  )
}

export default Category;