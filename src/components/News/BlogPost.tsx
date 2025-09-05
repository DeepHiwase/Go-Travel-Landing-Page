import { useState } from "react";
import { motion } from "motion/react";
import type { BlogPost } from "../../utils/contentTypes";

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);

  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: imageLoaded ? 1 : 0,
        y: imageLoaded ? 0 : 20,
      }}
      className="group flex cursor-pointer items-center justify-between gap-x-36"
    >
      <div className="overflow-hidden rounded-[1.5rem]">
        <img
          src={post.img}
          alt={post.alt}
          className="max-h-108 transform rounded-[1.375rem] transition-all duration-300 ease-in-out group-hover:scale-103"
          // image has a onload property to do something on loaded fully
          onLoad={() => setImageLoaded(true)} // this will be helpful as from database it takes time to load a image, a slight jerk will be shown with motion animation from y-20 to y-0
        />
      </div>
      <div className="mr-11 max-w-195">
        <p className="tracking-6 text-grey-900 mb-4.5 text-[1.25rem] font-medium">
          {post.date}
        </p>
        <h4 className="tracking-6 mb-6 text-[2.75rem] font-medium">
          {post.title}
        </h4>
        <p className="text-grey-800 mb-6 text-lg/13.5">{post.summary}</p>
        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200">
          View More
        </button>
      </div>
    </motion.li>
  );
}
