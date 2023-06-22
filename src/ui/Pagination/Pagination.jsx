import classes from "./Pagination.module.css";
import Button from "../Button/Button.jsx";

import { useEffect, useState } from "react";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = props.pageNumbers;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  let prevDisabled = false;
  let nextDisabled = false;

  if (nextPage > pageNumbers) nextDisabled = true;
  if (prevPage <= 0) prevDisabled = true;

  const nextPageHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const prevPageHandler = () => {
    setCurrentPage((prevState) => prevState - 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    props.setPage(currentPage);
  }, [currentPage, props.setPage]);

  return (
    <div className={classes.pagination}>
      <Button
        onClick={prevPageHandler}
        disabled={prevDisabled}
        secondary={true}
      >
        Back
      </Button>
      <p>
        {String(currentPage)}/{String(pageNumbers)}
      </p>
      <Button
        onClick={nextPageHandler}
        disabled={nextDisabled}
        secondary={true}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;

// const Pagination = ({ numberOfPages, page }) => {
//   const { pageNumber } = useParams();
//   const [currentPage, setCurrentPage] = useState(Number(pageNumber && page));
//   let prevDisabled = false;
//   let nextDisabled = false;
//   const prevPage = currentPage - 1;
//   const nextPage = currentPage + 1;
//
//   if (currentPage === +numberOfPages) nextDisabled = true;
//   if (prevPage <= 0) prevDisabled = true;
//
//   const nextPageHandler = () => {
//     setCurrentPage((prevState) => prevState + 1);
//   };
//   const prevPageHandler = () => {
//     setCurrentPage((prevState) => prevState - 1);
//   };
//
//   return (
//     <div className={classes.pagination}>
//       <Link to={String(prevPage)}>
//         <Button
//           onClick={prevPageHandler}
//           disabled={prevDisabled}
//           secondary={true}
//         >
//           Back
//         </Button>
//       </Link>
//       <p>
//         {String(currentPage)}/{String(numberOfPages)}
//       </p>
//       <Link to={String(nextPage)}>
//         <Button
//           onClick={nextPageHandler}
//           disabled={nextDisabled}
//           secondary={true}
//         >
//           Next
//         </Button>
//       </Link>
//     </div>
//   );
// };
