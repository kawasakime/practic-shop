import * as React from "react";

import * as S from "./styles";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setSearch } from "../../../redux/filterSlice";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  marginLeft?: string;
  width?: string;
}

const Search: React.FunctionComponent<SearchProps> = ({ marginLeft = "60px", width = "300px" }) => {
  const search = useAppSelector((state) => state.filter.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState<string>(search);

  //eslint-disable-next-line
  const updateSearch = React.useCallback(
    debounce((text) => {
      navigate("/catalog");
      dispatch(setSearch(text));
    }, 800),
    []
  );

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    updateSearch(e.target.value);
  }

  function handleClickClearBtn() {
    setValue("");
    updateSearch("");
  }

  return (
    <S.Search marginLeft={marginLeft}>
      <S.Input
        width={width}
        placeholder="Поиск по товарам..."
        value={value}
        onChange={handleChangeSearch}
      />

      {value === "" ? (
        <AiOutlineSearch className="icon" />
      ) : (
        <AiOutlineClose className="icon clear-btn" onClick={handleClickClearBtn} />
      )}
    </S.Search>
  );
};

export default Search;
