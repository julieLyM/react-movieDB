import React, { PureComponent } from "react";

import { searchMovieData } from "../service/movieData";
import Movie from "./Movie";

export default class ListMovies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await searchMovieData();
    this.setState({
      results: data.results
    });
  };

  render() {
    const { results } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          flexDirection: "row",
          fontWeight: "bold",
          textAlign: "center",
          margin: "10px"
        }}
      >
        {results.map(element => (
          <Movie key={element.id} element={element} />
        ))}
      </div>
    );
  }
}
