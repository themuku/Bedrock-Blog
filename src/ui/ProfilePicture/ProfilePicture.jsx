import classes from "./ProfilePicture.module.css";

const ProfilePicture = (props) => {
  return (
    <div style={props.style} className={classes["user-image"]}>
      <img src={props.userImage} />;
    </div>
  );
};

export default ProfilePicture;
