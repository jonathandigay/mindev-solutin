import React, { useEffect, useState } from "react";
import Header from "./Layouthead";
import Footer from "./Layoutfooter";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <div className="up-arrow">
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Layout;
