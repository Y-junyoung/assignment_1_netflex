import React, { useState } from "react";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../context/profile.context";
import MoviesList from "./../../components/MoviesList/MoviesList";

function MyPage() {
  const { nickname, updateNickname, likedMovies } = useProfile();
  const [newNickname, setNewNickname] = useState("");

  const handleChangeNickname = (e) => {
    setNewNickname(e.target.value);
  };

  const handleSubmitNickname = () => {
    updateNickname(newNickname); // 새로운 닉네임을 업데이트 한 후
    setNewNickname(""); // 다시 빈 스트링으로 반환
  };

  return (
    <>
      <div className={styles.form}>
        <label htmlFor="nickname">현재 닉네임 : {nickname}</label>
        <input
          id="nickname"
          name="nickname"
          className={styles.nick}
          type="text"
          placeholder="닉네임을 수정하시려면 입력하세요"
          onChange={handleChangeNickname}
        />
        <button className={styles.btn} onClick={handleSubmitNickname}>
          변경
        </button>
      </div>
      <div>
        <MoviesList listTitle="좋아하는 영화목록" movies={likedMovies} />
      </div>
    </>
  );
}

export default MyPage;
