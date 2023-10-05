import "./Pager.css";
import { useState } from "react";

const Pager = ({ numberPage=12 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="page-number-container">
      <div
        className={
          currentPage === currentPage - 1
            ? "Default-page Default-page-active"
            : "Default-page"
        }
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <a>&lt;</a>
      </div>

      {[...Array(numberPage).keys()].map((pageNumber) => (
        <div
          className={
            currentPage === pageNumber + 1
              ? "Default-page Default-page-active"
              : "Default-page"
          }
          onClick={() => {
            setCurrentPage(pageNumber + 1);
          }}
        >
          <a>{pageNumber + 1}</a>
        </div>
      ))}

      <div
        className={
          currentPage === currentPage + 1
            ? "Default-page Default-page-active"
            : "Default-page"
        }
        onClick={() => {
          if (currentPage < numberPage) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <a>&gt;</a>
      </div>
    </div>
  );
};

export default Pager;
