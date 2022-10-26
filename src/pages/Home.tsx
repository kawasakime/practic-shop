import * as React from "react";
import Mailing from "../components/Mailing";
import Main from "../components/Main";
import MiniCategories from "../components/MiniCategories";
import { config } from "../configs/config";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Main />
      <MiniCategories />
      {config.mailing.enable && <Mailing />}
    </>
  );
};

export default Home;
