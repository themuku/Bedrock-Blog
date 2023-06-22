import EditNewsletter from "../../components/EditNewsletter/EditNewsletter.jsx";

import classes from "./HomePage.module.css";
import Container from "../../ui/Container/Container.jsx";
import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../../ui/BlogCard/BlogCard.jsx";
import Featured from "../../ui/Featured/Featured.jsx";

const HomePage = (props) => {
  const { posts, featured } = useLoaderData();

  return (
    <main>
      <Container>
        <section className={classes["featured-post"]}>
          <h4>Featured Post</h4>
          <Featured
            url={featured[0].url}
            image={featured[0].img}
            title={featured[0].title}
            categories={featured[0].category}
          />
        </section>
        <section className={classes["recent-posts"]}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>Recent Posts</h4>
            <Link
              className={classes["see_all"]}
              style={{ alignSelf: "flex-end" }}
              to="posts"
            >
              <p>See All</p>
            </Link>
          </div>
          <div className={classes["blog-carts"]}>
            {posts.map((post) => (
              <BlogCard
                url={post.url}
                title={post.title}
                image={post.img}
                key={post.id}
                categories={post.category}
              />
            ))}
          </div>
        </section>
      </Container>
      <EditNewsletter />
    </main>
  );
};

export const homePageLoader = async ({ params }) => {
  const postResponse = await fetch(
    "http://localhost:3169/data/?_sort=id&_order=desc&_limit=4"
  );

  const featuredResponse = await fetch(
    "http://localhost:3169/data?featured=true"
  );

  const postsData = await postResponse.json();
  const featuredData = await featuredResponse.json();

  return { posts: postsData, featured: featuredData };
};

export default HomePage;
