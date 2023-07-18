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

      <div className="flex w-full flex-col items-center justify-center gap-4 ">
      <input
          autoComplete="email"
          className="h-12 w-96 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white text-black"
          id="email-input"
          name="email"
          type="email"
          placeholder='Tên đăng nhập hoặc email'
        />
        <input
          autoComplete="password"
          className="h-12 w-96 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white text-black"
          id="password-input"
          name="password"
          type="password"
          placeholder='Nhập mật khẩu'
        />
        <button className="flex h-12 w-96 items-center justify-center rounded-md bg-blue-400 py-8 px-8 font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-blue-500 sm:py-0">
          Đăng nhập 
        </button>
        <button className="flex h-12 w-96 items-center justify-center rounded-md bg-primary-500 py-8 px-8 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0">
          Đăng nhập bằng Google +
        </button>
      </div>
    </>
  )
}
