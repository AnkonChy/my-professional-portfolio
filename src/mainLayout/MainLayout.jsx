import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-52px)] rounded-none">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
