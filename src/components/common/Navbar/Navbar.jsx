// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
// import "./Navbar.css"; // Create this CSS file

const Navbar = () => {
  return (
    <nav className="left-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-lg hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-lg hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-lg hover:text-gray-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
