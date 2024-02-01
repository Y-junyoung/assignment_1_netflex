import React from "react";
import { Link } from "react-router-dom";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";
import Button from "../Button";

function MoviesListItem({ movie }) {
  console.log(movie);

  return (
    <>
      <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
        <h6>{movie.title}</h6>
      </Link>
      <Button movie={movie} />
    </>
  );
}

export default MoviesListItem;
