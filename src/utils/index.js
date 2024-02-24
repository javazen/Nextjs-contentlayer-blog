import { compareDesc, parseISO } from "date-fns"

export const cx = (...classNames) => classNames.filter(Boolean).join(" ")

// return blogs sorted from latest to oldest
export const sortBlogs = (blogs) => {
    return blogs
    .slice()
    .sort((a,b) => 
        compareDesc(
            parseISO(a.publishedAt),
            parseISO(b.publishedAt) )
    )
}

export const isDevEnvironment = process && process.env.NODE_ENV === "development";
