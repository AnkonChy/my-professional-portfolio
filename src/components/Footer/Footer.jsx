import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 rounded-md">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Ankon Chowdhury
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
