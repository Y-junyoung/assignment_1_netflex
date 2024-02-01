import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../context/auth.context";
import { useProfile } from "../../context/profile.context";

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const { nickname } = useProfile();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <p>USER : {nickname}</p>
              <Link className={styles.link} to="/my-page">
                마이페이지
              </Link>
              <Link className={styles.link} onClick={logout}>
                로그아웃
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
