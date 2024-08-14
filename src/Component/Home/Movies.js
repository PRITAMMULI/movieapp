import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../GenralComponent/Context/ProjectContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Favorite } from "@mui/icons-material";

function Movies() {
  const { fetchDetails, movies } = useContext(ProjectContext);
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleShowMore = () => {
    navigate("allmovies");
    setShowAll(true);
  };

  const moviesToShow = showAll ? movies : movies.slice(0, 6);

  return (
    <>
      <div className="movies_heading">
        <h3 className="mb-3 mt-3">Top Movies</h3>
        <Link onClick={handleShowMore} className="mt-3 mb-3 show_all">
          show All
        </Link>
      </div>

      <div className="row movies_card_row">
        {moviesToShow.map((value, index) => {
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

export default Movies;
