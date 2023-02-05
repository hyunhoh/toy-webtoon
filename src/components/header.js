import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// import { logo } from '../../public/img/logo.png';
import { HiMoon, HiSun } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { useDarkMode } from './DarkMode/DarkMode';
import { useEffect, useState } from 'react';
import { webtoons } from '../repository/webtoons';
import styles from './header.module.css';
import { Link } from 'react-router-dom'

const Header = ({ setFilteredData }) => {
  const [inputView, setInputView] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setIsLogin(true);
    }
  }, []);

  // useEffect(() => {
  //   inputView === true ?
  //     setFilteredData(webtoons)
  //     : null;
  // }, [inputView]);

  const handleSearch = e => {
    setFilteredData(webtoons.filter(ele => ele.title.includes(e.target.value)));
  };

  return (
    <>
      <span className={styles.darkmode} onClick={toggleDarkMode}>{!darkMode ? <HiMoon /> : <HiSun />}</span>
      <header className={styles.header}>
        {isLogin ? (
          <Link to="/mypage" className={styles.user}>
            <FaUser />
          </Link>
        ) : (
          <Link to="/Login" className={styles.user}>
            <FaUser />
          </Link>
        )}
        <span className={styles.hoom}><a href="/"><AiFillHome /></a></span>
        {inputView ? (
          <div className={styles.search}>
            <input
              type="text"
              onChange={handleSearch}
              autoFocus
              onBlur={() => setInputView(false)}
              className={styles.search_input}
              placeholder="Search..."
            />
          </div>
        ) : (
          <span className={styles.search} onClick={() => setInputView(true)}>
            <FaSearch />
          </span>
        )}
      </header>
    </>
  );
};

export default Header;
