import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/search";
import UserInfo from "./pages/userinfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Search} />
        <Route exact path="/userinfo" component={UserInfo} />
      </div>
    </Router>
  );
}

export default App;
