import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/error-01.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300  transition-colors">
      <div className="text-8xl font-extrabold text-gray-400 mb-4">
        <img src={error404} alt="" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600  mb-6 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
      <div className="mt-10">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="60"
            cy="35"
            rx="50"
            ry="5"
            fill="#cbd5e1"
            fillOpacity="0.5"
          />
          <circle cx="60" cy="20" r="12" fill="#3b82f6" fillOpacity="0.2" />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
