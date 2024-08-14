import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../GenralComponent/Context/ProjectContext";
import { Favorite } from "@mui/icons-material";

function Topmovies() {
  const { fetchDetails, movies } = useContext(ProjectContext);

  const [topMovies, setTopmovies] = useState([]);

  const fetchPopularMovies = async () => {
    const popularMovies = await movies.filter((value) => {
      return value.rating > 8;
    });

    setTopmovies(popularMovies);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <h3 className="mb-3 mt-3">Popular Movies</h3>
      <div className="row movies_card_row">
        {topMovies.map((value, index) => {
          return (
            <div
              key={value.id}
              className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
            >
              <div className="card molvieCard">
                <img
                  src={value.poster_url}
                  className="card-img-top movie_card_image"
                  alt={value.title}
                />
                <div class="card-body">
                  <h5 class="card-title text-center movie_title">
                    {value.title}
                  </h5>
                  <div className="movies_heading">
                    <p class="card-text text-white d-flex">
                      Release Year: {value.release_year}
                    </p>
                    <p class="card-text text-white d-flex">
                      Rating: {value.rating}
                    </p>
                  </div>
                  <div className="d-flex justify-end">
                    <button className="btn btn-outline-success">
                      <Favorite /> Add to Favourite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Topmovies;
