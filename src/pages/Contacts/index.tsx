import { YMaps, Map } from "@pbe/react-yandex-maps";

import * as C from "../../styles/components";
import * as S from "./styles";

import { contacts } from "../../configs/contacts";

const Contacts = () => {
  const { coords, title, text, info } = contacts;
  return (
    <C.Wrapper>
      <YMaps>
        <Map style={{ height: 400, width: "100%" }} defaultState={{ center: coords, zoom: 14 }} />
      </YMaps>
      <S.Contacts>
        <h1>{title}</h1>
        <p>{text}</p>
        <br />
        {info.map((item) => (
          <S.Contact>
            {item.key}: <span>{item.value}</span>
          </S.Contact>
        ))}
      </S.Contacts>
    </C.Wrapper>
  );
};

export default Contacts;
