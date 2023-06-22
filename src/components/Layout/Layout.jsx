import Header from "../Header/Header.jsx";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
