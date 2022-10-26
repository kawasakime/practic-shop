import React from "react";
import { config } from "../../configs/config";
import Button from "../UI/Button";

import * as S from "./styles";

const Mailing: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  const { mailing } = config;

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <S.Mailing>
      <S.Container>
        <h1>{mailing.title}</h1>
        <form action="">
          <S.Input
            type="text"
            placeholder="Email"
            value={value}
            onChange={handleOnChange}
          />
          <Button primary isFill>
            {mailing.btnText}
          </Button>
        </form>
      </S.Container>
    </S.Mailing>
  );
};

export default Mailing;
