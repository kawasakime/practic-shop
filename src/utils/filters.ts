import {
  IFilterGroupParam,
  IFilterSlice,
  IProduct,
  IProductParams,
} from "../interfaces/components";

export function productsCategoryFilter(products: IProduct[], category: string) {
  return products.filter((item) => (category === "all" ? item : item.category === category));
}

function selectPrice(salePrice: number | undefined, price: number) {
  return !!salePrice ? salePrice : price;
}

export function filterProducts(products: IProduct[], filter: IFilterSlice) {
  return productsCategoryFilter(products, filter.activeCategory)
    .filter((item) => item.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
    .filter(
      (item) =>
        selectPrice(item.salePrice, item.price) >= filter.priceRange[0] &&
        selectPrice(item.salePrice, item.price) <= filter.priceRange[1]
    )
    .filter((item) =>
      filter.params.length > 0
        ? item.params.some(
            (itemParam) =>
              filter.params.filter(
                (filterParam) =>
                  filterParam.key === itemParam.key && filterParam.value === itemParam.value
              ).length > 0
          )
        : item
    );
}

export function getCurrentParams(params: IProductParams[], groups: IFilterGroupParam[]) {
  params.forEach((param) => {
    const elementIndex = groups.findIndex((item) => item.key === param.key);

    elementIndex === -1
      ? groups.push({ key: param.key, values: [param.value] })
      : (groups[elementIndex] = {
          key: param.key,
          values: [...groups[elementIndex].values, param.value],
        });
  });

  return groups;
}

export const convertValueForInput = (value: string | number) => (value === "" ? "" : +value);

export const convertValueForFilter = (value: string | number, type: "min" | "max") =>
  value === "" ? (type === "min" ? 0 : 99999) : +value;
