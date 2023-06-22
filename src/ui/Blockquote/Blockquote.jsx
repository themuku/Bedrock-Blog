import classes from "./Blockquote.module.css";

const Blockquote = (props) => {
  return (
    <blockquote className={classes.blockquote}>
      “{props.blockquote}“ — {props.author}
    </blockquote>
  );
};

export default Blockquote;
