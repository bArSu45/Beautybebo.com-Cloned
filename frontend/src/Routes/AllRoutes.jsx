import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payments/Payment";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin/Admin'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Home from '../Pages/Home/Home'
import Payment from '../Pages/Payments/Payment'
import Products from '../Pages/Products/Products'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={
                    <PrivateRoutes>
                        <Cart />

                    </PrivateRoutes>
                } />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path="/admin" element={<Admin/>}     />
            </Routes>
        </div>
    )
}
