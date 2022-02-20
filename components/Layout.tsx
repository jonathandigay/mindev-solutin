import React from "react";
import Header from "./Layouthead";
import Footer from "./Layoutfooter";
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
