import { TCategories } from "./config";

export interface IProducts {
  id: number;
  title: string;
  description: string;
  imgs: {
    folder: string;
    files: string[];
  };
  category: TCategories;
  price: number;
  salePrice?: number;
  params: { key: string; value: string }[];
}

export const products: IProducts[] = [
  {
    id: 1,
    title:
      "Dewal Расческа для мелирования CO-213 с пластиковым хвостиком, черный, 25 см",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
    imgs: {
      folder: "product1",
      files: ["1.png", "2.png", "3.png", "4.png"],
    },
    category: "combs",
    price: 250,
    salePrice: 230,
    params: [
      { key: "Страна", value: "Россия" },
      { key: "Цвет", value: "Чёрный" },
      { key: "Длина", value: "25 см" },
    ],
  },
];
