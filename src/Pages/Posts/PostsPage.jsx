import classes from "./PostsPage.module.css";
import { Outlet } from "react-router";
import Container from "../../ui/Container/Container.jsx";

function PostsPage(props) {
  return (
    <main className={classes.main}>
      <Container>
        <h1>All Blog Posts</h1>
        <Outlet />
      </Container>
    </main>
  );
}

export default PostsPage;
