import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import FetchArticles from "./FetchArticles";
import Authetication from "./Authetication";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Authetication} />
      </Router>
      {localStorage.getItem("userToken") ? (
        <Router>
          <Route path="/articles" component={FetchArticles} />
        </Router>
      ) : (
        <Router>
          <Redirect to="/" />
        </Router>
      )}
    </div>
  );
}

export default App;
