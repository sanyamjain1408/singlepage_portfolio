import React from 'react';
import logo from '/src/assets/logo.png';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow bg-white">
      <nav className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12" />
          </a>

          {/* Navigation */}
          <ul className="flex flex-row flex-wrap gap-0 items-center font-medium text-sm sm:text-base">
            <li>
              <a href="#home" className="py-2 px-3 hover:text-blue-600 text-gray-700">Home</a>
            </li>
            <li>
              <a href="#about" className="py-2 px-3 hover:text-blue-600 text-gray-700">About</a>
            </li>
            <li>
              <a href="#project" className="py-2 px-3 hover:text-blue-600 text-gray-700">Project</a>
            </li>
            <li>
              <a href="#contact" className="py-2 px-3 hover:text-blue-600 text-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
