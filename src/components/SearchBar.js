import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

import imageBaseUrl from "../service/url";
import { getMovieSearch } from "../service/movieData";

const LINK_TYPE_PATH = {
  tv: "tv",
  person: "actor",
  movie: "movie"
};

export default class SearchBar extends PureComponent {
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

  render() {
    const { data } = this.state;
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
            <h1
              style={{
                textDecoration: "none",
                textTransform: "uppercase"
              }}
            >
              Search Movie App
            </h1>
          </Link>
        </div>

        <div style={{ position: "relative" }}>
          <input
            style={{
              width: "350px",
              height: "25px",
              position: "relative"
            }}
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
            {data.map(element => (
              <Link
                key={element.id}
                to={`/${LINK_TYPE_PATH[element.media_type]}/${element.id}`}
              >
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
                        element.media_type === "movie"
                          ? `${imageBaseUrl}${element.poster_path}`
                          : `${imageBaseUrl}${element.profile_path}`
                      }
                      alt="pic"
                    />
                  </div>
                  <div>
                    {element.name}
                    {element.title}
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
