import classes from "./SearchInputField.module.css";

const SearchInputField = (props) => {
  return (
    <div className={classes.input}>
      {/*<FiSearch className={classes.icon} />*/}
      <input placeholder={props.placeholder} type={props.type} />
    </div>
  );
};

export default SearchInputField;
