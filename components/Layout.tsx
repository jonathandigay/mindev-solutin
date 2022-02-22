import React from "react";
import Header from "./Layouthead";
import { useState } from "react";
import Footer from "./Layoutfooter";
import Contact from "./contact";
import { ToogleContext } from "../context/toogler";
const Layout = ({ children }: any) => {
  const [isContact, setIsContact] = useState<boolean>(false);
  return (
    <div>
      <ToogleContext.Provider value={{ isContact, setIsContact }}>
        <Header />
        {children}
        <Footer />
        <div className="up-arrow">
          <i className="fas fa-arrow-up"></i>
        </div>
        <Contact />
      </ToogleContext.Provider>
    </div>
  );
};

export default Layout;
