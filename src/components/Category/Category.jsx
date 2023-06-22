import BlogCard from "../../ui/BlogCard/BlogCard.jsx";
import { useLoaderData } from "react-router-dom";
import Pagination from "../../ui/Pagination/Pagination.jsx";
import { useState } from "react";

function Category(props) {
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
            key={post.id}
            image={post.img}
            title={post.title}
            categories={post.category}
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
}

export const categoryLoader = async ({ params }) => {
  const { categoryName } = params;
  const category =
    categoryName.split("")[0].toUpperCase() + categoryName.slice(1);

  const response = await fetch(
    `http://localhost:3169/data?category=${category}`
  );

  return await response.json();
};

export default Category;
