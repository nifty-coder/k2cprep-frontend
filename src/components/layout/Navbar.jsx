import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import logo from '../../assets/k2c-logo-transparent.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Our Vision', path: '/vision' },
        { name: 'Why K2C', path: '/why-k2c' },
        { name: 'Programs', path: '/programs' },
        { name: 'For Parents', path: '/parents' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'text-accent font-semibold' : 'text-gray-600 hover:text-primary';
    };

    return (
        <nav className="bg-white text-primary sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={logo} alt="K2C Prep Logo" className="h-40 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-bold transition-colors shadow-sm ml-4"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path ? 'bg-gray-50 text-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-accent hover:bg-accent-hover text-white px-3 py-3 rounded-md text-base font-bold mt-4"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
