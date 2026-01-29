import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navbar isSticky={false} />

      {/* Page Content */}
      <main className="layout-content">
        <Outlet />   
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
