import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import HomeContainer from "./pages/home/HomeContainer";
import CommentsContainer from "./pages/Comments/CommentsContainer";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/comments/:id" component={CommentsContainer} />
				<Route exact path="/" component={HomeContainer} />
			</Switch>
		</Router>
	);
}

export default App;
