import React from 'react';
import { useFetchAllPostsQuery } from '../services/PostService';


const PostContainer = () => {
	const { data: posts, error, isLoading } = useFetchAllPostsQuery(5);

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <p>Произошла ошибка</p>}

			{
				posts && posts.map(post => <p key={post.id}>{post.title}</p>)
			}
		</div>
	);
};

export default PostContainer;