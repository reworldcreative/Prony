import React, { FC } from "react";
import "./Pagination.scss";

import doubleArrow from "@/assets/img/icons/double-arrow.svg";
import leftArrow from "@/assets/img/icons/arrow-left.svg";

interface PaginationProps {
  paginate: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ paginate, currentPage, totalPages }) => {
  return (
    <nav className="pagination">
      <div className="pagination__back">
        <button title="1" className="pagination__button" onClick={() => paginate(1)}>
          <img
            className="pagination__icon"
            src={doubleArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
          />
        </button>

        <button
          title={currentPage - 1 > 0 && (currentPage - 1).toString()}
          className="pagination__button"
          onClick={() => paginate(currentPage - 1)}
        >
          <img
            className="pagination__icon"
            src={leftArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="pagination__container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`pagination__page ${currentPage === index + 1 && "pagination__page_active"}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="pagination__next">
        <button
          title={currentPage + 1 <= totalPages && (currentPage + 1).toString()}
          className="pagination__button"
          onClick={() => paginate(currentPage + 1)}
        >
          <img
            className="pagination__icon"
            src={leftArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
          />
        </button>

        <button title={totalPages.toString()} className="pagination__button" onClick={() => paginate(totalPages)}>
          <img
            className="pagination__icon"
            src={doubleArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
