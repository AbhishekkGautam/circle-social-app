import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { token, isLoggedIn } = useSelector(state => state.auth);
  const location = useLocation();
  return token && isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};
