import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import DescriptionCredit from "./components/DescriptionCredit";
import DescriptionMovie from "./components/DescriptionMovie";
import ListMovies from "./components/ListMovies";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Route exact path="/" component={ListMovies} />
        <Route exact path="/movie/:movieId" component={DescriptionMovie} />
        <Route path="/actor/:personId" component={DescriptionCredit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
