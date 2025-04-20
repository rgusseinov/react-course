import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostService from "../API/PostService";
import usePosts from "../hooks/usePosts";
import useFetching from "../hooks/useFetching";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [sortedAndSearchedPosts] = usePosts(posts, filter);

	const [fetchPosts, isLoading, dataError] = useFetching(async () => {
		const data = await PostService.getAll();
		setPosts(data);
	});

	const createPost = (create) => {
		setPosts([...posts, create]);
	}

	const removePost = (post) => {
		const filterPosts = posts.filter(p => p.id !== post.id);
		setPosts(filterPosts);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="App">
			<PostForm create={createPost} />

			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>

			{
				dataError && <h1>Error ${dataError}</h1>
			}

			{
				isLoading ?
					<h1>Loading...</h1>
					: <PostList posts={sortedAndSearchedPosts} remove={removePost} />
			}
		</div>
	);
}

export default Posts;
