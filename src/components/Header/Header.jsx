import logo from "../../utils/nba-logo.png";
import styles from "./Header.module.scss";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <h2>NBA LEGENDS</h2>
    </div>
  );
};

export default Header;
