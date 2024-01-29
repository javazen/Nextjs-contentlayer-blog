import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    contentType: 'mdx',
    filePathPattern: '**/**/*.mdx',
    fields: {
      title: {
        type: 'string',
        required: true,
      },
      publishedAt: {
        type: 'date',
        required: true,
      },
      updatedAt: {
        type: 'date',
        required: true,
      },
      description: {
        type: 'string',
        required: true,
      },
      image: { 
        type: "image", 
      },
      isPublished: {
        type: 'boolean',
        default: true, 
      },
      author: {
        type: 'string',
        required: true,
      },
      tags: {
        type: 'list',
        of: { type: 'string' },
      },
    },
    computedFields: {
        url: {
          type: 'string',
          resolve: (doc) => `blogs/${doc._raw.flattenedPath}`
        },
        readingTime: {
          type: 'json',
          resolve: (doc) => readingTime(doc.body.raw)
        }
      },
  }))
  

export default makeSource({
  /* options */
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior:"append"}]] }
})