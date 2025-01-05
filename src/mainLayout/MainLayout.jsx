import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
  return (
    <div className="md:w-10/12 md:mx-auto font-montserrat">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default MainLayout;
