import React from "react";
import "./App.css";
import ListMovies from "./components/ListMovies";
import { BrowserRouter, Route } from "react-router-dom";
import DescriptionMovie from "./components/DescriptionMovie";
import SearchBar from "./components/SearchBar";
import DescriptionCredit from "./components/DescriptionCredit";

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
