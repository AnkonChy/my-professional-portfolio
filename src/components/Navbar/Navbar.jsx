import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  // const links = <></>;
  return (
    <div className="navbar fixed  z-10 max-w-full lg:px-[310px] backdrop-blur-sm">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Ankon Chowdhury
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className="relative text-base font-medium hover:bg-violet-50 text-black 
             after:content-[''] after:absolute after:bottom-1 
             after:left-1/2 after:transform after:-translate-x-1/2 
             after:w-3/4 after:h-[2px] after:bg-violet-500 
             after:scale-x-0 after:origin-left after:transition-transform 
             after:duration-300 hover:after:scale-x-100"
            >
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="aboutMe"
              smooth={true}
              duration={500}
              className="relative text-base font-medium hover:bg-violet-50 text-black 
             after:content-[''] after:absolute after:bottom-1 
             after:left-1/2 after:transform after:-translate-x-1/2 
             after:w-3/4 after:h-[2px] after:bg-violet-500 
             after:scale-x-0 after:origin-left after:transition-transform 
             after:duration-300 hover:after:scale-x-100"
            >
              About me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="relative text-base font-medium hover:bg-violet-50 text-black 
             after:content-[''] after:absolute after:bottom-1 
             after:left-1/2 after:transform after:-translate-x-1/2 
             after:w-3/4 after:h-[2px] after:bg-violet-500 
             after:scale-x-0 after:origin-left after:transition-transform 
             after:duration-300 hover:after:scale-x-100"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="relative text-base font-medium hover:bg-violet-50 text-black 
             after:content-[''] after:absolute after:bottom-1 
             after:left-1/2 after:transform after:-translate-x-1/2 
             after:w-3/4 after:h-[2px] after:bg-violet-500 
             after:scale-x-0 after:origin-left after:transition-transform 
             after:duration-300 hover:after:scale-x-100"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1P0ntuUUAkgz7Z1MZZAUeQTunpUVViwCA?usp=sharing"
            )
          }
          className="px-2 py-2 py- rounded-md text-sm md:text-base font-medium bg-[#7c3aed] hover:bg-[#5b21b6] text-white"
        >
          Resume
        </button>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
        >
          <li>
            <Link to="/" className="text-base font-medium">
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="aboutMe"
              smooth={true}
              duration={500}
              className=" font-medium"
            >
              About me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-base font-medium"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-base font-medium"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
