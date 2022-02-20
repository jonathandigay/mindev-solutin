import React, { useEffect, useState } from "react";
import Header from "./Layouthead";
import Footer from "./Layoutfooter";
import { Spinner } from "react-bootstrap";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
