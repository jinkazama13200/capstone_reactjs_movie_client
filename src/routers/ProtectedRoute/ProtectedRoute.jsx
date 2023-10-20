import React from "react";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { currentUser } = useUserContext();
  if (!currentUser) {
    const url = `/sign-in?purchase=${location.pathname}`;
    return <Navigate to={url} replace />;
  }
  if (currentUser?.maLoaiNguoiDung !== "KhachHang") {
    localStorage.removeItem("currentUser");
    window.location.replace("/");
  }
  return children || <Outlet />;
}
