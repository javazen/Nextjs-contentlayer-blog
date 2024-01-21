import React from 'react'
import Link from 'next/link';
import { cx, sortBlogs } from '@/src/utils/index';


const Tag = ({link="#", name, ...props}) => {
  return (
    <Link href={link} className={cx("inline-block", props.className)}>
        {name}
    </Link>
  )
}

export default Tag