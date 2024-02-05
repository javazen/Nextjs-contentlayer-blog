import React from 'react'
import Link from 'next/link';
import { cx } from '@/src/utils/index';


const Category = ({link="#", name, active, ...props}) => {
    // console.log("Category: "+link+" "+name )
  return (
    <Link 
        href={link} 
        className={cx(
            "inline-block py-2 px-10 m-2 rounded-full border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200", 
            props.className,
            active ? "bg-dark text-light" : "bg-light text-dark"
        )}>
        #{name}
    </Link>
  )
}

export default Category;