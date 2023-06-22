import Button from "../../ui/Button/Button.jsx";
import Container from "../../ui/Container/Container.jsx";
import classes from "./ContactPage.module.css";
import { Form, redirect } from "react-router-dom";

function ContactPage(props) {
  return (
    <main>
      <Container>
        <div className={classes["contact-card"]}>
          <h6>Contact</h6>
          <h1>Want to chat?</h1>
        </div>
        <div className={classes["owner-info"]}>
          <div>
            <p>test@test.com</p>
          </div>
          <div>
            <p>(0)-123-456-789</p>
          </div>
        </div>
        <div className={classes["contact-form"]}>
          <p>
            You can send me an email, but why not call? People don't call
            anymore... Call me!
          </p>
          <Form method="post" action="/contact">
            <input placeholder="Enter your name" type="text" name="name" />
            <input placeholder="Enter your email" type="email" name="email" />
            <textarea
              className={classes["message-input"]}
              placeholder="Your message"
              name="message"
            ></textarea>
            <Button>Submit Message</Button>
          </Form>
        </div>
      </Container>
    </main>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    name: data.get("name"),
    message: data.get("message"),
  };

  console.log(submission);

  return redirect("/");
};

export default ContactPage;
