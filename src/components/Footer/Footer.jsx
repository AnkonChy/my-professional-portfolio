import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-800 text-white p-4 rounded-none">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Ankon Chowdhury
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
