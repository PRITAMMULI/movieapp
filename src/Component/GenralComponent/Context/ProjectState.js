import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

function ProjectState(props) {
  const [movies, setMovies] = useState([]);

  const [newfeatured, setNewfeatured] = useState([]);
  const [sortByRating, setSortByRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favmovie, setFavmovie] = useState([]);

  const fetchDetails = async () => {
    const mockResponse = [
      {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        release_year: 2010,
        rating: 8.8,
        // poster_url: "https://example.com/posters/inception.jpg",
        poster_url:
          "https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg",
      },
      {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        release_year: 2008,
        rating: 7,
        // poster_url: "https://example.com/posters/dark_knight.jpg",
        poster_url:
          "https://images.squarespace-cdn.com/content/v1/5fc28a8d8fbfcf634c11b69c/1612823532797-R575JX5GED8FR6AHXYCW/91KkWf50SoL._SL1500_.jpg?format=1000w",
      },
      {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        release_year: 2014,
        rating: 8.6,
        // poster_url: "https://example.com/posters/interstellar.jpg",
        poster_url:
          "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg",
      },
      {
        id: 4,
        title: "The Godfather",
        genre: "Crime",
        release_year: 1972,
        rating: 9.2,
        poster_url:
          "https://th.bing.com/th/id/OIP.u5lvdFqa0C_9hkIh5t47XgAAAA?rs=1&pid=ImgDetMain",
      },
      {
        id: 5,
        title: "Pulp Fiction",
        genre: "Drama",
        release_year: 1994,
        rating: 8.9,
        poster_url:
          "https://th.bing.com/th/id/OIP.ETGTtm3xFuvfKPmkB_R5ggHaLH?rs=1&pid=ImgDetMain",
        // poster_url: "https://example.com/posters/pulp_fiction.jpg",
      },

      {
        id: 6,
        title: "Inception",
        genre: "Sci-Fi",
        release_year: 2010,
        rating: 6,
        // poster_url: "https://example.com/posters/inception.jpg",
        poster_url:
          "https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg",
      },
      {
        id: 7,
        title: "The Dark Knight",
        genre: "Action",
        release_year: 2008,
        rating: 4,
        // poster_url: "https://example.com/posters/dark_knight.jpg",
        poster_url:
          "https://images.squarespace-cdn.com/content/v1/5fc28a8d8fbfcf634c11b69c/1612823532797-R575JX5GED8FR6AHXYCW/91KkWf50SoL._SL1500_.jpg?format=1000w",
      },
      {
        id: 8,
        title: "Interstellar",
        genre: "Sci-Fi",
        release_year: 2014,
        rating: 8,
        // poster_url: "https://example.com/posters/interstellar.jpg",
        poster_url:
          "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg",
      },
      {
        id: 9,
        title: "The Godfather",
        genre: "Crime",
        release_year: 1972,
        rating: 9.2,
        poster_url:
          "https://th.bing.com/th/id/OIP.u5lvdFqa0C_9hkIh5t47XgAAAA?rs=1&pid=ImgDetMain",
      },
      {
        id: 10,
        title: "Pulp Fiction",
        genre: "Drama",
        release_year: 1994,
        rating: 8.9,
        poster_url:
          "https://th.bing.com/th/id/OIP.ETGTtm3xFuvfKPmkB_R5ggHaLH?rs=1&pid=ImgDetMain",
        // poster_url: "https://example.com/posters/pulp_fiction.jpg",
      },

      {
        id: 11,
        title: "Inception",
        genre: "Sci-Fi",
        release_year: 2010,
        rating: 5.8,
        // poster_url: "https://example.com/posters/inception.jpg",
        poster_url:
          "https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg",
      },
      {
        id: 12,
        title: "The Dark Knight",
        genre: "Action",
        release_year: 2008,
        rating: 2,
        // poster_url: "https://example.com/posters/dark_knight.jpg",
        poster_url:
          "https://images.squarespace-cdn.com/content/v1/5fc28a8d8fbfcf634c11b69c/1612823532797-R575JX5GED8FR6AHXYCW/91KkWf50SoL._SL1500_.jpg?format=1000w",
      },
      {
        id: 13,
        title: "Interstellar",
        genre: "Sci-Fi",
        release_year: 2014,
        rating: 3,
        // poster_url: "https://example.com/posters/interstellar.jpg",
        poster_url:
          "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg",
      },
      {
        id: 14,
        title: "The Godfather",
        genre: "Crime",
        release_year: 1972,
        rating: 9.2,
        poster_url:
          "https://th.bing.com/th/id/OIP.u5lvdFqa0C_9hkIh5t47XgAAAA?rs=1&pid=ImgDetMain",
      },
      {
        id: 15,
        title: "Pulp Fiction",
        genre: "Drama",
        release_year: 1994,
        rating: 8.9,
        poster_url:
          "https://th.bing.com/th/id/OIP.ETGTtm3xFuvfKPmkB_R5ggHaLH?rs=1&pid=ImgDetMain",
        // poster_url: "https://example.com/posters/pulp_fiction.jpg",
      },
    ];

    const popularmovies = mockResponse.slice(1, 5);
    setMovies(mockResponse);
    // const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "5e813e7926msh29824b3a611c5bbp1839a4jsne1a59c57dbb5",
    //     "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    //   },
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   setMovies(result);
    // } catch (error) {
    //   console.error(error);
    // }
  };

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
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setNewfeatured(sortedMovies);
    setSortByRating("byRating");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    setNewfeatured(filteredMovies);
  };

  const AddfavouriteMovie = (id) => {
    const fav = movies.find((value) => value.id === id);
    if (fav && !favmovie.some((movie) => movie.id === fav.id)) {
      setFavmovie([...favmovie, fav]);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        AddfavouriteMovie,
        favmovie,
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
  );
}

export default ProjectState;
