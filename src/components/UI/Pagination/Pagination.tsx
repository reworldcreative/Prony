import React, { FC } from "react";
import "./Pagination.scss";

import doubleArrow from "@/assets/img/icons/double-arrow.svg";
import leftArrow from "@/assets/img/icons/arrow-left.svg";

interface PaginationProps {
  paginate: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
  addClass?: string;
}

const Pagination: FC<PaginationProps> = ({ paginate, currentPage, totalPages, addClass = "" }) => {
  return (
    <nav className={`pagination ${addClass}`}>
      <div className="pagination__back">
        <button
          aria-label="Go to first page"
          title="1"
          className={`pagination__button ${currentPage === 1 && "pagination__button_inactive"}`}
          onClick={() => paginate(1)}
        >
          <img
            className="pagination__icon"
            src={doubleArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
            loading="lazy"
          />
        </button>

        <button
          aria-label="Go to previous page"
          {...(currentPage - 1 > 0 && { title: (currentPage - 1).toString() })}
          className={`pagination__button ${currentPage === 1 && "pagination__button_inactive"}`}
          onClick={() => paginate(currentPage - 1)}
        >
          <img
            className="pagination__icon"
            src={leftArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
            loading="lazy"
          />
        </button>
      </div>

      <div className="pagination__container">
        {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
          const pageNumber =
            totalPages <= 5 || currentPage <= 3
              ? index + 1
              : currentPage >= totalPages - 2
              ? totalPages - 4 + index
              : currentPage - 2 + index;
          return (
            <button
              aria-label={`${
                currentPage === pageNumber
                  ? `${pageNumber.toString()} page is current`
                  : `go to ${pageNumber.toString()} page`
              }`}
              key={index}
              className={`pagination__page ${currentPage === pageNumber && "pagination__page_active"}`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <div className="pagination__next">
        <button
          aria-label="Go to next page"
          {...(currentPage + 1 <= totalPages && { title: (currentPage + 1).toString() })}
          className={`pagination__button ${currentPage === totalPages && "pagination__button_inactive"}`}
          onClick={() => paginate(currentPage + 1)}
        >
          <img
            className="pagination__icon"
            src={leftArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
            loading="lazy"
          />
        </button>

        <button
          aria-label="Go to last page"
          title={totalPages.toString()}
          className={`pagination__button ${currentPage === totalPages && "pagination__button_inactive"}`}
          onClick={() => paginate(totalPages)}
        >
          <img
            className="pagination__icon"
            src={doubleArrow}
            alt="pagination arrow"
            width="20"
            height="20"
            aria-hidden="true"
            loading="lazy"
          />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
