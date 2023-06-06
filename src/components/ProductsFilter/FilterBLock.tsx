import * as React from "react";

import * as S from "./styles";

import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export interface FilterBlockProps {
  title: string;
  children: React.ReactNode;
}

const FilterBlock: React.FC<FilterBlockProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <S.FilterBlock className={!isOpen ? "closed" : undefined}>
      <header onClick={() => setIsOpen((prev) => !prev)}>
        {title} {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </header>
      <div className="content">{children}</div>
    </S.FilterBlock>
  );
};

export default FilterBlock;
