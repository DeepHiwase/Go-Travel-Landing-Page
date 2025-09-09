import Error from "../Error";
import useQueryBlogPosts from "../../hooks/useQueryBlogPosts";
// import { blogPosts } from "../../utils/content"; // now giving remote content from db supabase instead of local
import BlogPost from "./BlogPost";
import Loader from "../Loader";

export default function News() {
  // after adding supabase & react-q logic
  const { blogPosts, error, isLoading } = useQueryBlogPosts();

  // if (error) {
  //   // if error thrown by remote logic, reqct-query retries again & again -> defaut 3 times -> thats why show loading for some time if loading component is defined
  //   return <div>On No! some error occured.</div>;
  // }

  // if (isLoading) {
  //   return <div>Loading blog posts...</div>;
  // }

  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Latest news from us
        </h2>

        {/* Loading state */}
        {isLoading && !error && <Loader />}

        {/* Success state */}
        {!isLoading && !error && (
          <ul className="flex flex-col gap-y-34">
            {blogPosts?.map((post) => (
              <BlogPost post={post} key={post.id} />
            ))}
          </ul>
        )}

        {/* Error state */}
        {!isLoading && error && (
          <Error>
            It looks like something went wrong while loading our travel
            locations.
          </Error>
        )}
      </div>
    </section>
  );
}
