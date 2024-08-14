import React, { useContext, useEffect, useState } from "react";
import Navbar from "../GenralComponent/Navbar";
import ProjectContext from "../GenralComponent/Context/ProjectContext";
import { Favorite } from "@mui/icons-material";

function Allmovies() {
  const {
    fetchDetails,
    movies,
    newfeatured,
    setNewfeatured,
    handleSearchChange,
    handleSortChange,
    searchQuery,
    AddfavouriteMovie,
  } = useContext(ProjectContext);

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    setNewfeatured(movies);
  }, [movies]);

   return (
    <>
      <Navbar />
      <div className="row mb-4">
        <div className="filter_functionality">
          <p>
            <input
              type="text"
              className="form-control filter_option"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </p>
          <p>
            <select
              onChange={handleSortChange}
              className="form-select sort-by filter_option"
              aria-label="Default select example"
            >
              <option value="default">---select---</option>
              <option value="byRating">By Rating</option>
            </select>
          </p>
        </div>
      </div>

      <div className="row">
        {newfeatured.map((value) => (
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
              <div className="card-body">
                <h5 className="card-title text-center movie_title">
                  {value.title}
                </h5>
                <div className="movies_heading">
                  <p className="card-text text-white d-flex">
                    Release Year: {value.release_year}
                  </p>
                  <p className="card-text text-white d-flex">
                    Rating: {value.rating}
                  </p>
                </div>
                <div className="d-flex justify-end">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => AddfavouriteMovie(value.id)}
                  >
                    <Favorite /> Add to Favourite
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Allmovies;
