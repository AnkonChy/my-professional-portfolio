import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return <div className="md:w-10/12 md:mx-auto font-montserrat">
    <Navbar></Navbar>
    <Hero></Hero>
  </div>;
};

export default MainLayout;
