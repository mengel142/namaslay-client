import React, { useState } from "react";
import "./stylesheets/app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LeaderBoard from "./leaderBoard/index.js";
import { Signup, Login } from "./login/index.jsx";
import Home from "./Home.js";
import MeditationRiver from "./river/MeditationRiver.js";
import AsanaRiver from "./river/AsanaRiver.js";

const App = (props) => {
  const [isLoggedIn, setLogged] = useState(false);
  const [isSignedUp, setSignup] = useState(false);

  return (
    <Router>
      <div className="grid-container">
        <header></header>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/meditation-river">Meditation River</Link>
          <Link to="/asana-river">Asana River</Link>
          <Link to="/bulletinboard">Upcoming Events</Link>
          <Link to="/leaderboard">Leader Board</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Log in</Link>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about"></Route>
            <Route path="/leaderboard">
              <LeaderBoard></LeaderBoard>
            </Route>
            <Route path="/bulletinboard"></Route>
            <Route path="/login">
              {isLoggedIn ? (
                <Redirect to="/" />
              ) : (
                <Login handleLog={setLogged} />
              )}
            </Route>
            <Route path="/signup">
              {isSignedUp ? (
                <Redirect to="/login" />
              ) : (
                <Signup handleLog={setSignup} />
              )}
            </Route>
            <Route path="/meditation-river">
              <MeditationRiver />
            </Route>

            <Route path="/asana-river">
              <AsanaRiver />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
