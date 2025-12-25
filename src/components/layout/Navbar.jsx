import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import logo from '../../assets/k2c-logo-transparent.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const programsDropdownItems = [
        { name: 'SAT Prep (Lite & Pro)', anchor: 'sat-prep' },
        { name: 'Math Tutoring', anchor: 'math-tutoring' },
        { name: 'Computer Science & Cloud', anchor: 'computer-science' },
        { name: 'College Application Support', anchor: 'college-admissions' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'text-accent font-semibold' : 'text-gray-600 hover:text-primary';
    };

    const handleProgramClick = (anchor) => {
        navigate('/programs');
        setIsOpen(false);
        setIsProgramsDropdownOpen(false);
        // Delay scroll to allow navigation to complete
        setTimeout(() => {
            const element = document.getElementById(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <nav className="bg-white text-primary sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-24">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={logo} alt="K2C Prep Logo" className="h-50 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {/* Home */}
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/')}`}
                            >
                                Home
                            </Link>

                            {/* Why K2C */}
                            <Link
                                to="/why-k2c"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/why-k2c')}`}
                            >
                                Why K2C
                            </Link>

                            {/* Programs Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${location.pathname === '/programs' ? 'text-accent font-semibold' : 'text-gray-600 hover:text-primary'}`}
                                >
                                    Programs
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isProgramsDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                                        {programsDropdownItems.map((item) => (
                                            <button
                                                key={item.anchor}
                                                onClick={() => handleProgramClick(item.anchor)}
                                                className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors flex items-center justify-between group"
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>



                            {/* Contact */}
                            <Link
                                to="/contact"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/contact')}`}
                            >
                                Contact
                            </Link>

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
                        {/* Home */}
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-gray-50 text-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                        >
                            Home
                        </Link>

                        {/* Why K2C */}
                        <Link
                            to="/why-k2c"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/why-k2c' ? 'bg-gray-50 text-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                        >
                            Why K2C
                        </Link>

                        {/* Programs Dropdown Mobile */}
                        <div>
                            <button
                                onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/programs' ? 'bg-gray-50 text-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                            >
                                Programs
                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isProgramsDropdownOpen && (
                                <div className="pl-4 mt-1 space-y-1">
                                    {programsDropdownItems.map((item) => (
                                        <button
                                            key={item.anchor}
                                            onClick={() => handleProgramClick(item.anchor)}
                                            className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-primary flex items-center gap-2"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>



                        {/* Contact */}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'bg-gray-50 text-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                        >
                            Contact
                        </Link>

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
