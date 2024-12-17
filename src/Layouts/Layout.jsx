import React from "react";
//Component imports
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

function Layout({children}) {
  return (
    <>
      <Navbar />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
