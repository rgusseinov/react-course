import axios from "axios";

class PostService {
	
	static async getAll(){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
		return response.data;
	}

	static async getPostById(id){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return response;
	}

	static async getPostComments(id){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		return response;
	}
}

export default PostService;