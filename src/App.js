import React from "react";

import AboutPage from "./components/about/AboutPage";
import Homepage from "./components/home/HomePage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursePage from "./components/courses/CoursePage";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" component={CoursePage} />

        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
