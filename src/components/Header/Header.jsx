import Navigation from "../Navigation/Navigation.jsx";
import classes from "./Header.module.css";
import logo from "../../assets/BEDROK.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["header-box"]}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
