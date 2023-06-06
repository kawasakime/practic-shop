import * as React from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import * as S from "./styles";

interface IPaginationProps {
  productsCount: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  productsOnPage: number;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  productsCount,
  activePage,
  setActivePage,
  productsOnPage,
}) => {
  function handleOnClick(e: React.MouseEvent<HTMLLIElement>, pageNumber: number) {
    setActivePage(pageNumber);
  }

  return productsCount > productsOnPage ? (
    <S.Pagination>
      <li
        className={activePage === 0 ? "arrow disable" : "arrow"}
        onClick={() => setActivePage((prev) => prev - 1)}>
        <AiOutlineLeft />
      </li>
      {[...Array(Math.floor(productsCount / productsOnPage))].map((_, pageNumber) => (
        <li
          className={activePage === pageNumber ? "active" : undefined}
          key={pageNumber}
          onClick={(e) => handleOnClick(e, pageNumber)}>
          {pageNumber + 1}
        </li>
      ))}
      <li
        className={
          activePage === Math.floor(productsCount / productsOnPage) - 1 ? "arrow disable" : "arrow"
        }
        onClick={() => setActivePage((prev) => prev + 1)}>
        <AiOutlineRight />
      </li>
    </S.Pagination>
  ) : (
    <></>
  );
};

export default Pagination;
