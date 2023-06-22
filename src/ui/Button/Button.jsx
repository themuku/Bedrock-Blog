import classes from "./Button.module.css";

const Button = (props) => {
  let className;
  if (props.secondary)
    className = `${classes.button} ${classes["button-secondary"]}`;
  else className = `${classes.button} ${classes["button-primary"]}`;

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      className={className}
    >
      {props.circle && <div></div>}
      {props.children}
    </button>
  );
};

export default Button;
