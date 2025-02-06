import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-52px)] rounded-none">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
