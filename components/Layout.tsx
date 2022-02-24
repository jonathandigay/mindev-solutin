import React, { useEffect } from "react";
import Header from "./Layouthead";
import Footer from "./Layoutfooter";
import Contact from "./contact";
import { ToogleProvider } from "../context/toogler";
import { useRef } from "react";
import AOS from "aos";

const Layout = ({ children }: any) => {
  const scrollref = useRef<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollTop = () => {
    scrollref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ToogleProvider>
        <div ref={scrollref}></div>
        <Header />
        {children}
        <Footer />
        <div className="up-arrow" onClick={scrollTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
        <Contact />
      </ToogleProvider>
    </div>
  );
};

export default Layout;
