// call to supabase- remote state
import { createClient } from "@supabase/supabase-js";
import type { BlogPost } from "../utils/contentTypes";
import type { Database } from "./Database";

const supabaseUrl = "https://rvciyptjviplwldsrkdu.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey); // import type Database from pasted types file from supabase Database.ts so to get further post fields auto completions
// Remainder -> every time create or change table schema in supabase -> neew to again generate and import types form supabase

export async function getBlogPosts() {
  const { data, error } = await supabase.from("BlogPosts").select();

  // throw new Error('some error occured...'); // for dev mode

  if (error) { // this will be handle by react-query so handle gracefully instead of crashing server 
    throw new Error(
      `ERROR: Database returned error when fetching blog posts: ${error.message}`,
    );
  }

  const blogPosts: BlogPost[] = data.map((post) => {
    return {
      id: post.id,
      img: post.img_url,
      alt: post.img_alt,
      date: post.date_created,
      title: post.article_title,
      summary: post.article_summary,
    };
  });

  return blogPosts;
}
