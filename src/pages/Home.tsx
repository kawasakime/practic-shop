import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

// interface HomeProps {
// }

const Home: React.FunctionComponent = (props) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
