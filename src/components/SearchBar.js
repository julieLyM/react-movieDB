import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

import imageBaseUrl from "../service/url";
import { getMovieSearch } from "../service/movieData";

const LINK_TYPE_PATH = {
  tv: "tv",
  person: "actor",
  movie: "movie"
};

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: []
    };
    this.debouncedSearch = debounce(this.fetchMovieSearch, 250);
  }

  fetchMovieSearch = async () => {
    const res = await getMovieSearch(this.state.query);
    this.setState({
      data: res.results
    });
  };

  onChangeSearch = ({ target: { value } }) => {
    this.setState(
      {
        query: value
      },
      () => this.debouncedSearch(this.state.query)
    );
  };

  multiResults = () => {};

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "1% 4%"
        }}
      >
        <div>
          <Link to="/">
            {" "}
            <h1 style={{ textTransform: "uppercase" }}>Search Movie App</h1>
          </Link>
        </div>

        <div style={{ position: "relative" }}>
          <input
            style={{ width: "350px", height: "25px", position: "relative" }}
            onChange={this.onChangeSearch}
          />

          <div
            style={{
              background: "white",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "350px"
            }}
          >
            {this.state.data.map(e => (
              <Link key={e.id} to={`/${LINK_TYPE_PATH[e.media_type]}/${e.id}`}>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <div style={{ flex: "0 1 10%" }}>
                    <img
                      style={{ width: "10vw" }}
                      src={
                        e.media_type === "movie"
                          ? `${imageBaseUrl}${e.poster_path}`
                          : `${imageBaseUrl}${e.profile_path}`
                      }
                      alt="pic"
                    />
                  </div>
                  <div>
                    {e.name}
                    {e.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            style={{
              background: "bisque",
              borderRadius: "10%",
              height: "32px",
              width: "13%"
            }}
            onClick={this.fetchMovieSearch}
          >
            search
          </button>
        </div>
      </div>
    );
  }
}
