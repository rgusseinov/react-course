import { Route, Switch, Redirect } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/reducers/ActionCreator";


function AppRouter() {
	return (
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route exact path="/posts">
				<Posts />
			</Route>
			<Route exact path="/posts/:id">
				<PostPage />
			</Route>
			<Route path="/error">
				<Error />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			<Redirect to="/error" />
		</Switch>
	);
}

const Home = () => {
	const { users, isLoading, error } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	console.log(`error`, error);

	return <div>
		<h1>Home page!</h1>
		{error && <h2>{error}</h2>}

		{isLoading && <h2>Loading...</h2>}

		{JSON.stringify(users, null, 2)}
	</div>
}

export default AppRouter;