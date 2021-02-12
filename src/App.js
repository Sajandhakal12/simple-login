import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./_helpers";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <AuthRoute path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
