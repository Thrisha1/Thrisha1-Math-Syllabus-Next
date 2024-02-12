"use client"
import React, { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
    }

    const SearchBar = () => (
        <div className={`relative ${isSearchExpanded ? 'block' : 'hidden'} md:block`}>
            <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Search</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.9-4.9"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z"/>
                </svg>
            </button>
        </div>
    );

    const MobileSearchIcon = () => (
        <div className={`flex items-center space-x-4 md:hidden ${isSearchExpanded ? 'hidden' : 'flex'}`}>
            <button onClick={toggleSearch} className="p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Search</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.9-4.9"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z"/>
                </svg>
            </button>
        </div>
    );

    return (
        <nav className="bg-gray-200 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:hidden items-center space-x-4 text-4xl">
                    Logo. Here
                </div>

                    <div className="flex flex-end ">
                        <MobileSearchIcon />
                        <SearchBar />
                    </div>
                    <div className="hidden md:flex items-center space-x-4 text-4xl">
                        Logo. Here
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex m-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:flex md:flex-end md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <NavItem href="#" text="Courses" extraClasses="bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:hover:text-blue-700" />
                            <NavItem href="#" text="Donate" extraClasses="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" />
                            <NavItem href="#" text="Log in" extraClasses="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" />
                            <NavItem href="#" text="Sign up" extraClasses="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" />
                        </ul>
                    </div>
            </div>
        </nav>
    );
}

const NavItem = ({ href, text, extraClasses }) => (
    <li>
        <Link href={href} className={`block py-2 px-3 rounded md:p-0 ${extraClasses}`} aria-current="page">{text}</Link>
    </li>
);

export default Navbar;
