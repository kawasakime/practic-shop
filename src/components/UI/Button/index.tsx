import React from "react";
import { ButtonProps } from "../../../interfaces/components";

import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  children,
  isFill = false,
  primary = false,
  handleCLick,
}) => {
  return (
    <S.Button isFill={isFill} primary={primary} onClick={handleCLick}>
      {children}
    </S.Button>
  );
};

export default Button;
