"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Products', path: '/all-products' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 z-50">

            {/* Logo */}
            <Link href="/" className="font-extrabold text-3xl text-white">
                NextStore
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => {
                    const isActive = pathname === link.path;
                    return (
                        <Link 
                            key={i}
                            href={link.path}
                            className={`group flex flex-col gap-0.5 text-white`}
                        >
                            {link.name}
                            <div
                                className={`h-0.5 bg-white transition-all duration-300 
                                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>
                    );
                })}
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center">
                <button className="px-8 py-2.5 rounded-full ml-4 bg-indigo-700 text-white transition-all duration-300 hover:bg-indigo-900 hover:text-white">
                    Login
                </button>
                <button className="px-8 py-2.5 rounded-full ml-4 bg-white text-black transition-all duration-300 hover:bg-indigo-900 hover:text-white">
                    Sign in
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="h-6 w-6 text-white cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-52 h-screen bg-white flex flex-col md:hidden items-center py-20 gap-4 text-gray-800 transition-all duration-500 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => {
                    const isActive = pathname === link.path;
                    return (
                        <Link
                            key={i}
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`w-40 py-2 text-center rounded-full 
                                ${isActive ? "bg-indigo-500 text-white" : "bg-indigo-100 hover:bg-indigo-300"}`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <button className="bg-indigo-500 text-white px-8 py-2.5 rounded-full w-40 hover:bg-indigo-400">
                    Login
                </button>
                <button className="bg-black text-white px-8 py-2.5 rounded-full w-40 hover:bg-gray-600">
                    Sign in
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
