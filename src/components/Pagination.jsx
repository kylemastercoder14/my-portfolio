import React from "react";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center justify-center gap-2 mt-5">
      {pages.map((page, index) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`font-semibold px-4 py-2 rounded-md shadow-lg ${
            page === currentPage ? "bg-primaryDark text-onSurfaceLight" : "bg-surfaceContainerDark text-onSurfaceVariantDark"
          }`}
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
