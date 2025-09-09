import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../api/api";

// so react query works as intermediatory between those remote de call/req supabase and cliect side
export default function useQueryBlogPosts() {
  const {
    data: blogPosts, // data is renamed as blogPosts
    error,
    isLoading,
  } = useQuery({
    queryKey: ["BlogPosts"],
    // key is use to uniquely identify query itself, when page load, react query going to check - do we have info for this key query in cache if not then going to call db  
    queryFn: getBlogPosts, // db call - supabase call getting data and error
  });

  return {
    blogPosts,
    error,
    isLoading,
  };
}
