import { useMemo } from "react";

const usePosts = (posts, {sort, query}) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

	return [sortedAndSearchedPosts];
}

export default usePosts;