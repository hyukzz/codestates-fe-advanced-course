import Loader from "../../components/Loader";
import Container from "../../containers/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";
import "../../styles/comments.css";

function CommentsList({ comments }) {
	const goHome = () => {
		window.location.href = "/";
	};
	return (
		<Container>
			<div className="comments">
				{comments.map((comment, i) => (
					<div key={i}>
						<div className="wrapper">
							<div className="content-container">
								<span className="nameText">{comment.name}</span>
								<span className="commentsText">
									{comment.body.length >= 100
										? comment.body.substring(0, 100) + "..."
										: comment.body}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={goHome} className="button button-right button-success">
				<FontAwesomeIcon icon={faArrowLeftRotate} className="icon" />
				뒤로가기
			</button>
		</Container>
	);
}

function CommentView({ comments, isLoading }) {
	return isLoading ? (
		<Loader isLoading={isLoading} />
	) : (
		<CommentsList comments={comments} />
	);
}

export default CommentView;
