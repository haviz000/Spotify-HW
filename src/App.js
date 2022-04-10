import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePlaylist from "./pages/CreatePlaylist";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound/index.jsx";
import LoginAlert from "./pages/LoginAlert/index";
import { useSelector } from "react-redux";
import YourPlaylist from "./pages/CreatePlaylist/YourPlaylist";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isAuth ? <CreatePlaylist /> : <LoginAlert />}
          </Route>
          <Route path="/your-playlist">
            {isAuth ? <YourPlaylist/> : <LoginAlert/>}
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
