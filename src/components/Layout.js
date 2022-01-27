import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
