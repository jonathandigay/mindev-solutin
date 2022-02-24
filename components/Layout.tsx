import React from "react";
import Header from "./Layouthead";
import Footer from "./Layoutfooter";
import Contact from "./contact";
import { ToogleProvider } from "../context/toogler";

const Layout = ({ children }: any) => {
  return (
    <div>
      <ToogleProvider>
        <Header />
        {children}
        <Footer />
        <div className="up-arrow">
          <i className="fas fa-arrow-up"></i>
        </div>
        <Contact />
      </ToogleProvider>
    </div>
  );
};

export default Layout;
