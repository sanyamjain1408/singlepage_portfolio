import React from 'react'
import logo from '/src/assets/logo.png'

export default function Header() {
    return (
        <header
        
        className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-2 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#home" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12 ml-5"
                            alt="Logo"
                        />
                    </a>

                    <ul className="flex flex-wrap items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center">
                        <li>
                            <a
                                href="#home"
                                className="block py-2 pr-4 pl-3 duration-200 hover:text-blue-600 text-gray-700"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block py-2 pr-4 pl-3 duration-200 hover:text-blue-600 text-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className="block py-2 pr-4 pl-3 duration-200 hover:text-blue-600 text-gray-700"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block py-2 pr-4 pl-3 duration-200 hover:text-blue-600 text-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </header>
    );
}
