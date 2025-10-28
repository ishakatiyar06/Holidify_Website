import { Navigate, Outlet } from "react-router-dom";

const ProctectedRoute = () => {
  const token = sessionStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={"/login"} replace={true} />;
};

export default ProctectedRoute;
