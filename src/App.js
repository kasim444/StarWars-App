import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import CharacterDetail from "./components/character/detail/CharacterDetail";
import MovieDetails from "./components/movie/detail/MovieDetails";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="st-container d-flex-column">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:title" component={MovieDetails} />
          <Route path="/character/:id" component={CharacterDetail} />
          <Route
            path="/githubProfile"
            component={() => {
              window.location.href = 'https://github.com/kasim444/Javascript-Camp-2019/tree/master/challenges/star-wars-app';
              return null;
            }}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
