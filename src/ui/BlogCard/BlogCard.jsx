import Badge from "../Badges/Badge.jsx";
import classes from "./BlogCard.module.css";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const navigate = useNavigate();

  const postUrl = props.url;

  const goToPostHandler = (event) => {
    if (!event.target.classList.contains("themuku")) {
      navigate(`/post/${postUrl}`);
    }

    return;
  };

  return (
    <div onClick={goToPostHandler} className={classes.card}>
      <img src={props.image} />
      <div>
        {props.categories.map((category) => (
          <Badge key={category} type={category}>
            {category}
          </Badge>
        ))}
      </div>
      <h4>{props.title}</h4>
    </div>
  );
};

export default BlogCard;
