import Loader from "../components/Loader";
import HomeList from "./HomeList";

function List({ isLoading, posts, error }) {
	return isLoading ? (
		<Loader isLoading={isLoading} />
	) : posts && !error ? (
		<HomeList posts={posts} />
	) : (
		"error"
	);
}

export default List;
