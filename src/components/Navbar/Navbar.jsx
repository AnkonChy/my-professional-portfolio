import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="text-lg font-medium">Home</Link>
      </li>
      <li>
        <Link
          to="aboutMe"
          smooth={true}
          duration={500}
          className="text-lg font-medium"
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-lg font-medium"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-lg font-medium"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-4 sticky top-0">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Ankon Chowdhury</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success">Resume</a>
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
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
