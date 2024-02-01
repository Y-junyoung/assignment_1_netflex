import React from "react";
import { useAuth } from "../../context/auth.context";
import { useProfile } from "../../context/profile.context";
import styles from "./Button.module.scss";

function Button({ movie }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, addLikedMovies, removeLikedMovies } = useProfile();

  const isLiked = likedMovies.some((likedMovie) => likedMovie.id === movie.id);
  // 좋아요를 누른 영화 배열의 아이디와 해당 영화의 아이디가 같으면 true 반환
  // 좋아요를 누르지 않았다면 배열 내부의 id가 null 이므로 false반환

  const handleLikedMovie = () => {
    addLikedMovies(movie);
  };

  const handleDisLikedMovie = () => {
    removeLikedMovies(movie.id);
  };

  return (
    <div className={styles.btnBox}>
      {isLoggedIn && !isLiked && (
        <button className={styles.btn} onClick={handleLikedMovie}>
          <span>좋아요</span>
        </button>
      )}
      {isLoggedIn && isLiked && (
        <button className={styles.btn} onClick={handleDisLikedMovie}>
          <span>좋아요 취소</span>
        </button>
      )}
    </div>
  );
}

export default Button;
