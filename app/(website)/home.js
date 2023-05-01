import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Portfolio from "../../components/Portfolio"
import Skills from "../../components/Projects";

export default function Post({ posts }) {
  return (
    <>
    < Portfolio />
    <h1 class="text-4xl py-20 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">explore My <br />  awesome <span class="text-blue-500"> Blog Collections</span></h1>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 5).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
        
      )}
      <Skills />
    </>
  );
}
