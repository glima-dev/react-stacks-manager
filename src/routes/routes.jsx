import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import LoginPage from "../pages/Login";
import ProfileDash from "../pages/ProfileDash";
import RegisterPage from "../pages/Register";

const RoutesComponent = () => {
   const token = localStorage.getItem("@TOKEN");

   return (
      <Routes>
         <Route path="/" element={!token && <LoginPage />} />
         <Route path="/register" element={!token && <RegisterPage />} />
         <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<ProfileDash />} />
         </Route>
      </Routes>
   );
};

export default RoutesComponent;



