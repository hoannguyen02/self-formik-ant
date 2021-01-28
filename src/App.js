import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/posts/:id'>
            <Post />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
