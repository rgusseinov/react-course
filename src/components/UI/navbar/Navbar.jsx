import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/posts">Posts</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;