import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-32 items-center justify-between">
          <div className="absolute  inset-y-0 right-0 mx-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-shrink-0 mx-5 items-start">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="flex flex-1 bbb items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden bar sm:ml-6 sm:block">
              <div className="flex space-x-4 text-white">
                <a
                  href="#"
                  className=" px-3 text-light py-2 text-base font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#home"
                  className=" px-3 text-light py-2 text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className=" px-3 text-light py-2 text-base font-medium"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className=" px-3 text-light py-2 text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className=" px-3 text-light py-2 text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#home"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={toggleMobileMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
