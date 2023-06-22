import ProfilePicture from "../../ui/ProfilePicture/ProfilePicture.jsx";
import classes from "./Author.module.css";

const Author = (props) => {
  return (
    <div className={classes.author}>
      <ProfilePicture userImage={props.authorImage} />
      <h5>{props.author}</h5>
      <p>{props.title}</p>
    </div>
  );
};

export default Author;
