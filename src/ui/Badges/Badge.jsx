import classes from "./Badges.module.css";
import { Link } from "react-router-dom";

const getBadgeColor = (type) => {
  if (type === "Anime") return "red";
  if (type === "Cars") return "blue";
  if (type === "Sport") return "green";
  if (type === "Tech") return "neutral";
  if (type === "Entertainment") return "violet";
  if (type === "Aviation") return "yellow";
  if (type === "teal") return "teal";
  if (type === "Pets") return "orange";
};

const Badge = (props) => {
  let color = `${classes["badge-neutral"]}`;

  if (props.type) {
    color = `${classes[`badge-${getBadgeColor(props.type)}`]}`;
  }

  const url =
    props.children.slice(0, 1).toUpperCase() + props.children.slice(1);

  return (
    <Link to={`/category/${url}`}>
      <p className={`${classes.badge} ${color} themuku`}>{props.children}</p>
    </Link>
  );
};

export default Badge;
