import React from "react";

import * as C from "../styles/components";

const NotFound: React.FC = () => {
  return (
    <C.NotFoundContainer>
      <h1>404</h1>
      <p>
        Упс! Произошла ошибка. Попробуйте обновить страницу или попробовать
        позже
      </p>
    </C.NotFoundContainer>
  );
};

export default NotFound;
