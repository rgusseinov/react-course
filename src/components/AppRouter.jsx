import { Route, Switch, Redirect } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";

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
	return <h1>Home page!</h1>;
}

export default AppRouter;