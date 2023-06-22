import classes from "./Footer.module.css";
import logo from "../../assets/BEDROK.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Link href="#">
          <img src={logo} />
        </Link>
        <p>Copyright 2023</p>
      </div>
      <div className={classes.frame}>
        <div>
          <p>CATEGORIES</p>
          <ul>
            <li>
              <Link to="category/Sport">Sport</Link>
            </li>
            <li>
              <Link to="category/Anime">Anime</Link>
            </li>
            <li>
              <Link to="category/Tech">Tech</Link>
            </li>
            <li>
              <Link to="posts">All</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>PAGES</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="subscribe">Subscribe</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>CONTACT</p>
          <ul>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Telegram</Link>
            </li>
            <li>
              <Link href="#">E-mail me</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
