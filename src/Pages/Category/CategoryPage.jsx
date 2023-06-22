import { useParams } from "react-router-dom";
import classes from "./CategoryPage.module.css";
import Container from "../../ui/Container/Container.jsx";
import { Outlet } from "react-router";

function CategoryPage(props) {
  const { categoryName } = useParams();
  const category =
    categoryName.split("")[0].toUpperCase() + categoryName.slice(1);

  return (
    <main className={classes.main}>
      <Container>
        <h6>CATEGORY</h6>
        {category && <h1 className={classes["category-name"]}>{category}</h1>}
        <p className={classes["category-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum.
        </p>
        <Outlet />
      </Container>
    </main>
  );
}

export default CategoryPage;
