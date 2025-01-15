import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../costumer/Pages/HomePage/HomePage.jsx";
import Cart from "../costumer/components/Cart/Cart.jsx";
import Navigation from "../costumer/components/Navigation/Navigation.jsx";
import Footer from "../costumer/components/Footer/Footer.jsx";
import Product from "../costumer/components/Product/Product.jsx";
import ProductDetails from "../costumer/components/ProductDetails/ProductDetails.jsx";
import Order from "../costumer/components/Order/Order.jsx";
import Checkout from "../costumer/components/Checkout/Checkout.jsx";
import OrderDetail from "../costumer/components/Order/OrderDetail.jsx";

const CostumerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail/>}></Route>

      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CostumerRouter;
