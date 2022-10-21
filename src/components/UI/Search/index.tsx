import * as React from "react";

import * as S from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = (props) => {
  return (
    <S.Search>
      <S.Input placeholder="Поиск по сайту..."></S.Input>
      <AiOutlineSearch className="icon"/>
    </S.Search>
  );
};

export default Search;
