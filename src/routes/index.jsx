import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicRoutes from "./public";
import Home from "pages/Home";
import { ContactPage } from "pages/contact";
import { Advantages } from "pages/applicants/Advantages";
import { Jobs } from "pages/applicants/Jobs";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoutes>
              <ContactPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/advantages"
          element={
            <PublicRoutes>
              <Advantages />
            </PublicRoutes>
          }
        />
        <Route
          path="/jobs"
          element={
            <PublicRoutes>
              <Jobs />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
