import React from 'react';
import logo from '/src/assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t rounded-t-3xl overflow-hidden">
      <div className="w-full p-2 py-4 lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-12 sm:h-20 mt-3 ml-5 hidden sm:block"
                alt="Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-16 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xs font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 text-xs font-medium">
                <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/project" className="hover:underline">Project</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 text-xs font-medium">
                <li className="mb-2">
                  <a href="https://github.com/sanyamjain1408" className="hover:underline" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.linkedin.com/in/sanyamjain14/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sanyam.p.jain/" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-xs text-gray-500 sm:text-center">
            © 2003 — All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
