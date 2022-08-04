import { Link } from "react-router-dom";

const HomeList = ({ posts }) => (
	<ul className="list">
		{posts.map(post => (
			<li key={post.id}>
				<div className="list-home">
					<section className="list-home-content">
						<h3 className="list-home-title">{post.title}</h3>
						<span>
							<strong>작성자: {post.userId}</strong>
						</span>
						<p>
							{post.body.length >= 200
								? post.body.substring(0, 200) + "..."
								: post.body}
						</p>
					</section>
					<div className="comment">
						<Link to={`/comments/${post.id}`}>댓글</Link>
					</div>
				</div>
			</li>
		))}
	</ul>
);

export default HomeList;
