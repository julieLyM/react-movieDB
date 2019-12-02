import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Actor from "./components/Actor";
import DescriptionMovie from "./components/DescriptionMovie";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={DescriptionMovie} />
        <Route path="/actor/:personId" component={Actor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
