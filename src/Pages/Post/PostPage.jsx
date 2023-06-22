import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../../ui/Container/Container.jsx";
import classes from "../Post/PostPage.module.css";
import BlogCard from "../../ui/BlogCard/BlogCard.jsx";
import ProfilePicture from "../../ui/ProfilePicture/ProfilePicture.jsx";
import Blockquote from "../../ui/Blockquote/Blockquote.jsx";
import EditNewsletter from "../../components/EditNewsletter/EditNewsletter.jsx";
import userImage from "../../assets/Rectangle 5.png";

function PostPage(props) {
  const { postData, otherPostsData: otherPosts } = useLoaderData();

  console.log(postData);

  return (
    <main>
      <Container>
        {(postData) => {
          console.log(postData);
        }}
        <h1 className={classes["post-heading"]}>{postData.title}</h1>
        <img
          className={classes["post-image"]}
          src={postData.img}
          alt={postData.title}
        />
        <section className={classes["post-details"]}>
          <div className={classes["post-info"]}>
            <p>Posted 11/09/2003</p>
            <p>31 min read</p>
          </div>
          <div className={classes["post-author"]}>
            <ProfilePicture
              style={{ width: "32px", height: "32px" }}
              userImage={userImage}
            />
            <p>Posted by Themuku</p>
          </div>
          <h2>Nibh mauris cursus mattis molestie a iaculis at erat </h2>
          <p>
            Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
            consectetur id consequuntur velit et enim asperiores aut molestias
            ratione sit molestias iste in galisum maiores! Sit quibusdam omnis
            cum perferendis officia et molestiae beatae hic dolores architecto.
            Sit sunt a beatae nemo qui assumenda itaque ex harum delectus ea
            magnam voluptatem. Hic error cumque aut reiciendis molestias ut
            voluptas consectetur et corrupti nihil. Ordered list Second item And
            final third item Unordered list Second item And final third item
            Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
            consectetur id consequuntur velit et enim asperiores aut molestias
            ratione sit molestias iste in galisum maiores! Sit quibusdam omnis
            cum perferendis officia et molestiae beatae hic dolores architecto.
            Sit sunt a beatae nemo qui assumenda itaque ex harum delectus ea
            magnam voluptatem. Hic error cumque aut reiciendis molestias ut
            voluptas consectetur et corrupti nihil. Lorem ipsum dolor sit amet.
            Aut praesentium molestiae sit amet consectetur id consequuntur velit
            et enim asperiores aut molestias ratione sit molestias iste in
            galisum maiores! Sit quibusdam omnis cum perferendis officia et
            molestiae beatae hic dolores architecto.
          </p>
          <Blockquote
            blockquote={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
            author={"Themuku"}
          />
        </section>
        <section className={classes["other-posts"]}>
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
              to="/posts"
            >
              <p>See All</p>
            </Link>
          </div>
          <div className={classes["blog-carts"]}>
            {otherPosts.map((post) => (
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
}

export const postLoader = async ({ params }) => {
  const { postUrl } = params;

  const postResponse = await fetch(`http://localhost:3169/data?url=${postUrl}`);
  const otherPostsResponse = await fetch(
    `http://localhost:3169/data?url_ne=${postUrl}&_limit=4`
  );

  const [postData] = await postResponse.json();
  const otherPostsData = await otherPostsResponse.json();

  return { postData, otherPostsData };
};

export default PostPage;
