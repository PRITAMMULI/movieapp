import React, { useContext, useEffect } from "react";
import ProjectContext from "../GenralComponent/Context/ProjectContext";
import { Delete, DeleteForever } from "@mui/icons-material";
import Navbar from "../GenralComponent/Navbar"
function Favourite() {
  const { getFavouriteMovie, favourite, deleteFavourites } = useContext(ProjectContext);

  useEffect(() => {
    getFavouriteMovie();
  }, []);

  console.log(favourite);
  return (
    <>
      <Navbar />
      <div className="row movies_card_row">
        {favourite.map((value, index) => {
          console.log(value);
          return (
            <div
              key={value.id}
              className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
            >
              <div className="card molvieCard">
                <img
                  src={value.poster_path}
                  className="card-img-top movie_card_image"
                  alt={value.title}
                />
                <div class="card-body">
                  <h5 class="card-title text-center movie_title">
                    {value.original_title}
                  </h5>
                  <p class="card-text text-white d-flex">
                    Release Year: {value.release_date}
                  </p>
                  <p class="card-text text-white d-flex">
                    Rating: {value.vote_average}
                  </p>

                  <div className="d-flex justify-end">
                    <button className="btn btn-outline-danger"
                     onClick={(e) => {
                      e.preventDefault()
                      deleteFavourites(value.id)
                    }}
                    >
                      <DeleteForever /> Remove
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

export default Favourite;
