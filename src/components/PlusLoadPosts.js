import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

function PlusLoadPosts({
	search,
	isLoading,
	error,
	maxRange,
	setMaxRange,
	minRange,
	setMinRange,
	countPost,
}) {
	const setRanges = (min, max) => {
		setMinRange(min);
		setMaxRange(max);
	};

	const loadMorePost = () => {
		if (countPost) {
			const correctRange = minRange < maxRange && maxRange + 10 <= countPost;
			if (correctRange) {
				setRanges(minRange + 10, maxRange + 10); //기존것 유지 + 추가로드 10개
			} else if (maxRange < countPost) {
				const postsCount = maxRange + (countPost - maxRange);
				setRanges(maxRange, postsCount);
			}
		}
	};

	return countPost && !isLoading && !error && !search ? (
		<button
			onClick={loadMorePost}
			className="button button-center button-success"
		>
			<FontAwesomeIcon icon={faRefresh} spin className="icon" />
			더보기
		</button>
	) : null;
}

export default PlusLoadPosts;
