import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import Posts from "./Posts";
import Post from "./Post";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Posts />
        </Route>
        <Route path='/post/:id'>
          <Link to='/'>Back</Link>
          <Post />
        </Route>
      </Switch>
      <ReactQueryDevtools />
    </Router>
  );
}
