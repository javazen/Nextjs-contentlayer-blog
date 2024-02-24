"use client"
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon } from "../Icons"
import siteMetadata from '@/src/utils/siteMetadata';
import { isDevEnvironment } from '@/src/utils'

const Footer = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors);

    return (
    <footer className='mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
        <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
        Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-5 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
© 2023 CodeBucks. All rights reserved.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx-4'>
            <input 
                type="text" 
                placeholder="Enter your email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                className='w-full pl-2 sm:pl-0 bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
            />

            <input type="submit" className='bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium roudned px-3 sm:after:px-5 py-1'/>
        </form>
        <div className='flex items-center mt-8'>
            <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 transition-all ease duration-150"/></a>
            <a href={siteMetadata.twitter}  className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-125 transition-all ease duration-150"/></a>
            <a href={siteMetadata.github}  className="inline-block w-6 h-6 mr-4"><GithubIcon className="hover:scale-125 transition-all ease duration-150 fill-light dark:fill-dark"/></a>
            <a href={siteMetadata.dribbble}  className="inline-block w-6 h-6 mr-4"><DribbbleIcon className="hover:scale-125 transition-all ease duration-150"/></a>
        </div>

        <div className='w-full mt-16 md:mt-20 relative font-medium border-t border-solid border-light 
        py-6 px-8 flex flex-col lg:flex-row items-center justify-between'>
            <span className='text-center'>
                &copy;2023 CodeBucks. All rights reserved.         
            </span>
            <div className='text-center'>
                -- {(isDevEnvironment) ? 'Dev code' : 'Production code'}  --
            </div>
            <Link href="/sitemap" className='text-center underline py-4 md:py-0'>
                sitemap.xml
            </Link>
            <div className='text-center'>
                made with &hearts; by <a href="https://devdreaming.com" className='underline'>codebucks</a>
            </div>
        </div>

    </footer>
  )
}

export default Footer