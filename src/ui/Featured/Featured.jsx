import classes from "./Featured.module.css";
import Badge from "../Badges/Badge.jsx";
import { useNavigate } from "react-router-dom";

const Featured = (props) => {
  const navigate = useNavigate();

  const postUrl = props.url;

  const goToPostPage = (event) => {
    if (!event.target.classList.contains("themuku")) {
      navigate(`/post/${postUrl}`);
    }
  };

  return (
    <div onClick={goToPostPage} className={classes.featured}>
      <div className={classes["featured-box"]}>
        {props.categories.map((category) => (
          <Badge type={category} key={category}>
            {category}
          </Badge>
        ))}
        <h3>{props.title}</h3>
        <p>July 28, 2022 · 6 min read</p>
      </div>
      <img src={props.image} />
    </div>
  );
};

export default Featured;
