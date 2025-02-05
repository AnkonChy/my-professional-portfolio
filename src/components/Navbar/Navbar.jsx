import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  // const links = <></>;
  return (
    <div className="navbar fixed  z-10 max-w-full lg:px-[116px] backdrop-blur-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl">
          Ankon Chowdhury
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-lg font-medium">
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="aboutMe"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
            >
              About me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
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
              "https://drive.google.com/file/d/19JCgv212mYxUInkDNuikDBWcEtioh8oj/view?usp=sharing"
            )
          }
          className="px-2 py-2 py- rounded-md text-sm md:text-base font-medium bg-[#7c3aed] hover:bg-[#5b21b6] text-white"
        >
          Resume
        </button>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <Link to="/" className="text-lg font-medium">
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="aboutMe"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
            >
              About me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-lg font-medium"
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
