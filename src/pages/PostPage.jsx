import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";

function PostPage() {
	const params = useParams();
	const [post, setPost] = useState("");
	const [comments, setComments] = useState([]);

	const [fetchPost, isLoadingPost, postError] = useFetching(async () => {
		const response = await PostService.getPostById(params.id);

		setPost(response.data);
	});

	const [fetchComment, isLoadingComment, commentError] = useFetching(async () => {
		const response = await PostService.getPostComments(params.id);

		// console.log(response.data);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPost();
		fetchComment();
	}, []);

	return (
		<div style={{ width: 680 }} >
			{
				isLoadingPost && <h1>Post page is loading...</h1>
			}
			<h1>Post page {post.id}</h1>
			<p>Title: {post.title}</p>
			<p>Body: {post.body}</p>
			<h2>Comments</h2>
			<div>
				{
					isLoadingComment ? <div>Comments are loading...</div> :
						comments && comments.map(comment => (
							<div style={{ marginTop: '15px' }} key={comment.id}>
								<h3>{comment.name}</h3>
								<p>{comment.body}</p>
							</div>
						))
				}
			</div>
		</div>
	);
}

export default PostPage;