import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const item = localStorage.getItem("registrationValues");
  const user = { loggedIn: item ? true : false };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/register" />;
};

export default ProtectedRoutes;
