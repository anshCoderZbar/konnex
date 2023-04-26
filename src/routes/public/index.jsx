import React from "react";

import Footer from "common/layout/footer";
import Header from "common/layout/header";

const PublicRoutes = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default PublicRoutes;
