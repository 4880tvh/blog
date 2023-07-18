import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Login({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
    <div className="items-center w-full flex justify-center">
    <button className="flex justify-center items-center w-96 h-12 rounded-md bg-primary-500 py-8 px-8 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black">Đăng nhập bằng Google +</button> 
    </div>
    </>
  )
}
