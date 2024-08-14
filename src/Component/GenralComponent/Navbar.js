import React, { useContext, useState } from "react";
import movieLogo from "./Images/movielogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import ProjectContext from "./Context/ProjectContext";

function Navbar() {
  const navigate = useNavigate();

  const { movies, searchQuery, handleSearchChange } = useContext(ProjectContext);

  return (
    <>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav class="navbar navbar-expand-lg movies_navbar" data-bs-theme="dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={movieLogo} alt="" className="movologo_image" />{" "}
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar_menus">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/allmovies">
                  Movies
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link disabled" aria-disabled="true" to="/favourite">
                   Favourite
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
