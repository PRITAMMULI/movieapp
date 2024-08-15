import React, { useState } from "react";
import ProjectContext from "./ProjectContext";
import { db } from "../../FirebaseCred";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ProjectState(props) {
  const [movies, setMovies] = useState([]);

  const [favourite, setFavourite] = useState([]);
  const [newfeatured, setNewfeatured] = useState([]);
  const [sortByRating, setSortByRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchDetails = async () => {
    const fet = await fetch("https://jsonfakery.com/movies/paginated");
    const res = await fet.json();
    setMovies(res.data);

    console.log(res.data);
  };
  console.log(movies);
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === "byRating") {
      handleSortByRatings();
    } else {
      // Reset to original movies list if default or other option is selected
      setNewfeatured(movies);
      setSortByRating(null);
    }
  };

  const handleSortByRatings = () => {
    const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
    setNewfeatured(sortedMovies);
    setSortByRating("byRating");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredMovies = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(query)
    );

    setNewfeatured(filteredMovies);
  };

  const AddTofavouriteCollectionRef = collection(db, "favourite");

  const Add_To_favourite_collection = (newfavourite) => {
    return addDoc(AddTofavouriteCollectionRef, newfavourite);
  };
  const Add_To_Favourite = async (movie) => {
    try {
      await Add_To_favourite_collection(movie);
      toast.success(`movie is added in favourite list`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getAllFavourite = () => {
    return getDocs(AddTofavouriteCollectionRef);
  };

  const getFavouriteMovie = async () => {
    const data = await getAllFavourite();
    setFavourite(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const deleteFavourites = async (id) => {
    try {
      toast.success(`movie is added in favourite list`, {
        position: "top-center",
        theme: "colored",
      });
      const favouriteDoc = doc(db, "favourite", id);
      return deleteDoc(favouriteDoc);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <ProjectContext.Provider
        value={{
          deleteFavourites,
          Add_To_Favourite,
          getFavouriteMovie,
          favourite,
          fetchDetails,
          movies,
          handleSortChange,
          handleSearchChange,
          handleSortByRatings,
          newfeatured,
          setNewfeatured,
          sortByRating,
          setSortByRating,
          searchQuery,
          setSearchQuery,
        }}
      >
        {props.children}
      </ProjectContext.Provider>
      <ToastContainer />
    </>
  );
}

export default ProjectState;
