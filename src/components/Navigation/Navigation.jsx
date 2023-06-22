import Button from "../../ui/Button/Button.jsx";
import SearchInputField from "../../ui/InputField/SearchInputField.jsx";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <SearchInputField placeholder="Search" type="text" />
      <Button>Subscribe</Button>
    </nav>
  );
};

export default Navigation;
