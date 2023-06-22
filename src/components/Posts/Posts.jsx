import { useLoaderData } from "react-router-dom";
import BlogCard from "../../ui/BlogCard/BlogCard.jsx";
import Pagination from "../../ui/Pagination/Pagination.jsx";
import { useState } from "react";

const Posts = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = useLoaderData();
  const prevPage = currentPage - 1;
  const numberOfPosts = 8;
  let start;
  let end = numberOfPosts * currentPage;

  if (currentPage === 1) {
    start = 0;
  }

  if (currentPage > 1) {
    start = prevPage * numberOfPosts;
  }

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const renderedPosts = posts.slice(start, end);

  return (
    <>
      <section>
        {renderedPosts.map((post) => (
          <BlogCard
            url={post.url}
            image={post.img}
            title={post.title}
            categories={post.category}
            key={post.id}
          />
        ))}
      </section>
      {posts.length > numberOfPosts && (
        <Pagination
          setPage={setPage}
          pageNumbers={Math.ceil(posts.length / numberOfPosts)}
        />
      )}
    </>
  );
};

export const postsLoader = async ({ params }) => {
  const response = await fetch("http://localhost:3169/data");

  return await response.json();
};

export default Posts;
