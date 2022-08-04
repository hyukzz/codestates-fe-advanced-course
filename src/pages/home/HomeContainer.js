import { useState, useEffect, useCallback } from "react";
import HomeView from "./HomeView";

function HomeContainer() {
	const [maxRange, setMaxRange] = useState(10);
	const [minRange, setMinRange] = useState(0);
	const [postsRange, setPostsRange] = useState([]);

	const [posts, setPosts] = useState(null);
	const [postsFiltered, setPostsFiltered] = useState(null);

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [search, setSearch] = useState("");

	const setStatusResquet = (posts, error = false) => {
		setIsLoading(false);
		if (error) {
			setError(error);
			return;
		}
		setError(false);
		setPosts(posts);
	};

	const loadPosts = useCallback(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(posts => {
				setStatusResquet(posts);
			})
			.catch(error => {
				setStatusResquet(null, true);
			});
	}, []);

	const postsMemo = useCallback(() => {
		if (posts) {
			setPostsRange(oldPosts => {
				return [...oldPosts, ...posts.slice(minRange, maxRange)];
			});
		}
	}, [posts, minRange, maxRange]);

	const onChangeSearch = e => {
		setSearch(e.target.value.replace(/  {2,}/, ""));
	};

	useEffect(() => {
		if (posts && search) {
			const regex = new RegExp(`${search}`, "gi");
			const postsFilteredArray = posts.filter(post => {
				return regex.test(post.title);
			});
			setPostsFiltered(postsFilteredArray);
		} else {
			setPostsFiltered(null);
		}
	}, [posts, search]);

	useEffect(() => {
		loadPosts();
	}, [loadPosts]);

	useEffect(() => {
		postsMemo();
	}, [postsMemo]);

	return (
		<HomeView
			{...{
				onChangeSearch,
				search,
				isLoading,
				error,
				maxRange,
				setMaxRange,
				minRange,
				setMinRange,
			}}
			countPost={posts?.length}
			posts={postsFiltered || postsRange}
		/>
	);
}
export default HomeContainer;
