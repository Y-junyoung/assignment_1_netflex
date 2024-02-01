import { createContext, useContext, useState } from "react";

const initialValue = {
  nickname: "myNickname",
  likedMovies: [],
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState(initialValue.nickname);
  const [likedMovies, setLikedMovies] = useState(initialValue.likedMovies);

  const updateNickname = (newNickname) => {
    setNickname(newNickname);
  };

  const addLikedMovies = (movie) => {
    // 좋아요를 누르면 기존 좋아하는 영화 배열에 추가
    setLikedMovies((prevLikedMovies) => [...prevLikedMovies, movie]);
  };

  const removeLikedMovies = (movieId) => {
    // 좋아요 취소를 눌렀을 때 기존 좋아하는 영화 배열에 같은 것이 있으면 삭제하고 새로운 배열 반환
    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const value = {
    nickname,
    likedMovies,
    updateNickname,
    addLikedMovies,
    removeLikedMovies,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
