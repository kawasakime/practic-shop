import React from "react";
import { ButtonProps } from "../../../interfaces/components";

import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  children,
  isFill = false,
  primary = false,
}) => {
  return (
    <S.Button isFill={isFill} primary={primary}>
      {children}
    </S.Button>
  );
};

export default Button;
