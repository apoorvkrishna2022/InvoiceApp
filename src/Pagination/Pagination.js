import React from "react";
import Button from "../Components/Button/Button";
import "./Pagination.css";

export const Pagination = ({ setCurrentPage, currentPage, totalPage }) => {
    const prev=(e)=>{
        setCurrentPage(currentPage - 1);
    };
    const next=(e)=>{
        setCurrentPage(currentPage + 1);
    };
  return (
    <div className="pagination-display">
      {currentPage > 1 ? (
        <div>
          <Button button_name={"<<<"} onClick={prev} />
        </div>
      ) : null}
      {currentPage < totalPage ? (
        <div>
          <Button button_name={">>>"} onClick={next} />
        </div>
      ) : null}
    </div>
  );
};
