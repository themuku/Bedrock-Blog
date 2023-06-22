import Button from "../../ui/Button/Button.jsx";
import EmailInputField from "../../ui/InputField/EmailInputField.jsx";
import classes from "./EditNewsletter.module.css";

const EditNewsletter = (prop) => {
  const submitFormHandler = (e) => {};

  return (
    <div className={classes.newsletter}>
      <div className={classes["newsletter-box"]}>
        <div className={classes["newsletter-title"]}>
          <h3>A monthly post delivered straight to your inbox</h3>
        </div>
        <form
          onSubmit={submitFormHandler}
          className={classes["newsletter-form"]}
        >
          <EmailInputField />
          <Button type="submit">Submit</Button>
        </form>
        <p>Zero spam, just the good stuff.</p>
      </div>
    </div>
  );
};

export default EditNewsletter;
