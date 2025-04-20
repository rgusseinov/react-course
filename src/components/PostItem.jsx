import { useHistory } from "react-router-dom";
import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({ post, remove }) => {
	let history = useHistory();


	return (
		<div className="post">
			<div className="post__content">
				<strong>{post.id}. {post.title}</strong>
				<div>
					{post.body}
				</div>
			</div>
			<div className="post__btns">
				<MyButton
					onClick={() => history.push(`/posts/${post.id}`)}
				>
					Открыть
				</MyButton>
				<MyButton
					onClick={() => remove(post)}
				>
					Удалить
				</MyButton>
			</div>
		</div>
	);
};

export default PostItem;