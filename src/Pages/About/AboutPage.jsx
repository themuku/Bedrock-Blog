import EditNewsletter from "../../components/EditNewsletter/EditNewsletter.jsx";
import classes from "./About.module.css";
import UserCard from "../../components/UserCard/UserCard.jsx";
import Container from "../../ui/Container/Container.jsx";

const AboutPage = (props) => {
  return (
    <main classes={classes.about}>
      <Container>
        <section>
          <UserCard />
        </section>
      </Container>
      <div className={classes["section-line"]}></div>
      <Container>
        <section>
          <div className={classes["user-story"]}>
            <h4>My Story</h4>
            <div>
              <p>
                Eum fuga reprehenderit tempore quidem suscipit fugiat a
                recusandae minima. Debitis et exercitationem. Nisi vero
                deserunt. Expedita aut fugiat autem similique officiis. Qui quo
                repellendus voluptatum. Quia nemo voluptatem cumque aut
                blanditiis neque.
              </p>
              <p>
                Eum fuga reprehenderit tempore quidem suscipit fugiat a
                recusandae minima. Debitis et exercitationem. Nisi vero
                deserunt. Expedita aut fugiat autem similique officiis. Qui quo
                repellendus voluptatum. Quia nemo voluptatem cumque aut
                blanditiis neque.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <EditNewsletter />
    </main>
  );
};

export default AboutPage;
