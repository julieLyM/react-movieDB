import React, { Component } from "react";
import { searchMovieData } from "../service/movieData";
import Movie from "./Movie";

export default class ListMovies extends Component {
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
    const results = await searchMovieData();
    this.setState({
      results: results.results
    });
  };

  render() {
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
        {this.state.results.map(res => (
          <Movie key={res.id} res={res} />
        ))}
      </div>
    );
  }
}
