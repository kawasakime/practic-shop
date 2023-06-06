import * as React from "react";
import { TPriceRangeInput } from "../../interfaces/components";

import debounce from "lodash.debounce";

import * as S from "./styles";
import { convertValueForFilter, convertValueForInput } from "../../utils/filters";

interface IMinMaxPriceProps {
  priceRange: TPriceRangeInput;
  setPriceRange: (range: [number, number]) => void;
}

const MinMaxPrice: React.FunctionComponent<IMinMaxPriceProps> = ({ priceRange, setPriceRange }) => {
  const [minMaxPrice, setMinMaxPrice] = React.useState<TPriceRangeInput>(priceRange);

  //eslint-disable-next-line
  const updatePriceFilter = React.useCallback(
    debounce((range) => {
      setPriceRange(range);
    }, 500),
    []
  );

  function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>, type: "min" | "max") {
    const target = e.target.value;
    if (/^[0-9]+$/.test(target) || target === "") {
      setMinMaxPrice((prev) => [
        type === "min" ? convertValueForInput(target) : prev[0],
        type === "max" ? convertValueForInput(target) : prev[1],
      ]);

      updatePriceFilter([
        type === "min"
          ? convertValueForFilter(target, "min")
          : convertValueForFilter(minMaxPrice[0], "min"),
        type === "max"
          ? convertValueForFilter(target, "max")
          : convertValueForFilter(minMaxPrice[1], "max"),
      ]);
    }
  }

  return (
    <S.MinMaxPrice>
      <S.PriceInput
        onChange={(e) => handleChangePrice(e, "min")}
        value={minMaxPrice[0]}
        placeholder="От"
      />
      <S.PriceInput
        onChange={(e) => handleChangePrice(e, "max")}
        value={minMaxPrice[1]}
        placeholder="До"
      />
    </S.MinMaxPrice>
  );
};

export default MinMaxPrice;
