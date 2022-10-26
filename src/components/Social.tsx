import React from "react";
import { config } from "../configs/config";

import Vk from "./UI/SocialsItems/Vk";
import Telegram from "./UI/SocialsItems/Telegram";
import Instagram from "./UI/SocialsItems/Instagram";

import * as C from "../styles/components";

import { SocialProps } from "../interfaces/components";

const Social: React.FC<SocialProps> = ({ marginLeft = "20px" }) => {
  const { social } = config;
  return (
    <C.Social marginLeft={marginLeft}>
      {!!social.telegram && <Telegram link={social.telegram} />}
      {!!social.vk && <Vk link={social.vk} />}
      {!!social.instagram && <Instagram link={social.instagram} />}
    </C.Social>
  );
};

export default Social;
