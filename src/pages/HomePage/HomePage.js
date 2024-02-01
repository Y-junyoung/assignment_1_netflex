import React, { useEffect, useState } from "react";
import api from "../../api/api";
import MoviesList from "../../components/MoviesList";
import { useAuth } from "../../context/auth.context";

function HomePage() {
  const { isLoggedIn } = useAuth();
  const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  useEffect(() => {
    Promise.all([
      api.movies.getMovies("nowPlaying"),
      api.movies.getMovies("topRated"),
    ]).then(([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated }));
  }, []);

  return (
    <main>
      <MoviesList
        listTitle="현재 상영작"
        movies={movies.nowPlaying}
        isLoggedIn={isLoggedIn}
      />
      <MoviesList
        listTitle="평점이 높은 영화"
        movies={movies.topRated}
        isLoggedIn={isLoggedIn}
      />
    </main>
  );
}

export default HomePage;
