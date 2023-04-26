import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicRoutes from "./public";
import Home from "pages/Home";
import { ContactPage } from "pages/contact";
import { Advantages } from "pages/applicants/Advantages";
import { Jobs } from "pages/applicants/Jobs";
import { ApplyNow } from "pages/applicants/ApplyNow";
import { CurrentPage } from "pages/current";
import { SingleJobPage } from "pages/applicants/SingleJobPage";
import { CompaniesAdvantages } from "pages/companies/CompaniesAdvantages";
import { TemporaryWork } from "pages/companies/TemporaryWork";
import { Recruitment } from "pages/companies/Recruitment";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route
          exact path="/home"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/contact"
          element={
            <PublicRoutes>
              <ContactPage />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/advantages"
          element={
            <PublicRoutes>
              <Advantages />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/jobs"
          element={
            <PublicRoutes>
              <Jobs />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/jobs/:slug"
          element={
            <PublicRoutes>
              <SingleJobPage />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/apply-now"
          element={
            <PublicRoutes>
              <ApplyNow />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/current"
          element={
            <PublicRoutes>
              <CurrentPage />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/company-advantages"
          element={
            <PublicRoutes>
              <CompaniesAdvantages />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/temporary-work"
          element={
            <PublicRoutes>
              <TemporaryWork />
            </PublicRoutes>
          }
        />
        <Route
          exact path="/recruitment"
          element={
            <PublicRoutes>
              <Recruitment />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
