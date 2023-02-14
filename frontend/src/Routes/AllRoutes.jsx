import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import Admin from "../Pages/Admin/Admin";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payments/Payment";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import PrivateRoutes from "./PrivateRoutes";
import PersonalCare from "../Pages/Products/PersonalCare";
import MakeupData from "../Pages/Products/Makeup";
import Profile from "../Pages/Profile/Profile";
import Order from "../Pages/Order/Order";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/payment"
          element={<PrivateRoutes> {<Payment />}</PrivateRoutes>}
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/orders"
          element={<PrivateRoutes> {<Order />}</PrivateRoutes>}
        />
        <Route path="/makeup" element={<MakeupData />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<PrivateRoutes> {<Profile />}</PrivateRoutes>}
        />
        <Route path="/*" element={<> 404 Not Found... </>} />
      </Routes>
    </div>
  );
}
