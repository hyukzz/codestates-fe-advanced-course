import "../../styles/home.css";
import HeaderView from "./HeaderView";
import List from "../../Home/List";
import PlusLoadPosts from "../../components/PlusLoadPosts";
import Container from "../../containers/Container";

function HomeView({
	onChangeSearch,
	search,
	isLoading,
	posts,
	error,
	maxRange,
	setMaxRange,
	minRange,
	setMinRange,
	countPost,
}) {
	return (
		<Container posts={posts}>
			<HeaderView />

			<input
				type="text"
				name="search"
				id="search"
				onChange={onChangeSearch}
				value={search}
				placeholder="검색"
				minLength="1"
				className="input"
			/>

			<List {...{ isLoading, posts, error }} />

			<PlusLoadPosts
				{...{
					search,
					isLoading,
					error,
					countPost,

					maxRange,
					setMaxRange,

					minRange,
					setMinRange,
				}}
			/>
		</Container>
	);
}
export default HomeView;
