import classes from "./EmailInputField.module.css";

const EmailInputField = (props) => {
  return (
    <input
      className={classes.input}
      type="text"
      placeholder="Enter your email"
    />
  );
};

export default EmailInputField;
