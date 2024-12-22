"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";


export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h12",
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          "" +
          now.toLocaleTimeString("en-US", { hour12: true })
      );
    };

    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>

        {/* -----------    Navbar   -------------- */}

        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          {/* ----------   Home   ----------- */}

          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            {" "}
            Home{" "}
          </Link>

          {/* ----------      About   ------------ */}

          <Link
            href={"http://localhost:3000/about"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            {" "}
            About{" "}
          </Link>

          {/* --------   blog  -------- */}

          <Link
            href={"http://localhost:3000/blog"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            {" "}
            Blog{" "}
          </Link>

          <Link
            href={"http://localhost:3000/contact"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            {" "}
            Contact{" "}
          </Link>
        </nav>

        <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-8 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300 ">
          Github
          <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24">
            {/* <path d="M5 12h14M12 5l7 7-7 7"/> */}

          </svg>
          <SiGithub />

        </button>

      </div>
    </header>
  );
}
