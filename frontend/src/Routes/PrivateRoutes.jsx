import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { GetLocal } from "../Utils/localstorage";

export default function PrivateRoutes({ children }) {
  const location = useLocation();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const Token = GetLocal("auth") || false;
 
  if (!Token) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }
  return children;
}
