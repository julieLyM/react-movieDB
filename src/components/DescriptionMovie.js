import React, { Component } from "react";

import { getMovieDetail } from "../service/movieData";

import CreditsMovie from "./CreditsMovie";
import imageBaseUrl from "../service/url";

export default class DescriptionMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: {}
    };
  }

  componentDidMount() {
    this.fetchMovieId();
  }

  async fetchMovieId() {
    const id = this.props.match.params;
    const movieId = await getMovieDetail(id.movieId);
    this.setState({
      movieId
    });
  }

  render() {
    const { title, overview, poster_path } = this.state.movieId;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 10%"
        }}
      >
        <h1>{title}</h1>
        <div style={{ width: "100%" }}>
          <img
            src={`${imageBaseUrl}${poster_path}`}
            alt="
          pic movie"
          />
        </div>
        <p>{overview}</p>
        <CreditsMovie id={this.props.match.params.movieId} />
      </div>
    );
  }
}
