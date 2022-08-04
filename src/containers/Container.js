function Container({ children, posts }) {
	return (
		<div className={`app${posts?.length > 0 ? " app-content" : ""}`}>
			{children}
		</div>
	);
}

export default Container;
