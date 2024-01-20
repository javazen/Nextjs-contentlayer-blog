import React from 'react'
import Link from "next/link";
import { cx } from '@/src/utils'

function Tag({ link = '#', name, ...props}) {
    return (
        <Link href={link} className={cx("inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light", props.className)}>
            {name}
        </Link>
    );
}

export default Tag