import { Center } from "@chakra-ui/react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GetLocal } from "../Utils/localstorage";

export default function PrivateRoutes({ children }) {
  const location = useLocation();
  const Token = GetLocal("auth") || false;

  if (!Token) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }
  return <Center> {children}</Center>;
}
