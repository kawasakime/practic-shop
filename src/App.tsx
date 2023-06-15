import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Home from "./pages/Home";
import { baseTheme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
