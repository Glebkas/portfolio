import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Layout() {
  const [open, setOpen] = useState(false);

  function handleHumburgerClick() {
    setOpen(!open);
  }

  function handleNavLinkClick() {
    setOpen(false);
  }

  return (
    <>
      <Header
        handleNavLinkClick={handleNavLinkClick}
        open={open}
        handleHumburgerClick={handleHumburgerClick}
      ></Header>

      <main className="main">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
