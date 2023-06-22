import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={classes["user-card"]}>
      <h6>About me</h6>
      <h1>Hey I'm Isaiah</h1>
    </div>
  );
};

export default UserCard;
