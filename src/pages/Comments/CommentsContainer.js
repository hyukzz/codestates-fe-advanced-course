import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";

function CommentsContainer(props) {
	const { id } = props.match.params;
	const [isLoading, setIsLoading] = useState(true);
	const [comments, setComments] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then(response => response.json())
			.then(data => {
				setComments(data);
				setIsLoading(false);
			});
	}, []);

	return <CommentsList {...{ isLoading, comments }} />;
}

export default CommentsContainer;
