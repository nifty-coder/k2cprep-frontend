import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, BookOpen, Mail } from 'lucide-react';

const NotFound = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const quickLinks = [
        { to: '/', icon: Home, label: 'Home', description: 'Back to homepage' },
        { to: '/programs', icon: BookOpen, label: 'Programs', description: 'View our offerings' },
        { to: '/contact', icon: Mail, label: 'Contact', description: 'Get in touch' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <div
                    className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
                    style={{
                        top: `${mousePosition.y / 20}px`,
                        left: `${mousePosition.x / 20}px`,
                    }}
                />
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16">
                {/* 404 Number with Gradient */}
                <div className="mb-8 relative">
                    <h1
                        className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none select-none"
                        style={{
                            background: 'linear-gradient(135deg, #000000 0%, #be2226 50%, #000000 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 80px rgba(190, 34, 38, 0.1)',
                        }}
                    >
                        404
                    </h1>

                    {/* Floating Search Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse" />
                            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-accent/40 animate-bounce" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="text-center mb-12 max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                        Page Not Found
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto mb-6 rounded-full" />
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-2">
                        Looks like you've ventured off somewhere else.
                    </p>
                    <p className="text-base sm:text-lg text-gray-500">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Primary CTA */}
                <div className="mb-12">
                    <Link
                        to="/"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <ArrowLeft className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isHovering ? '-translate-x-1' : ''}`} />
                        <span className="relative z-10">Back to Home</span>
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="w-full max-w-4xl">
                    <p className="text-center text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
                        Or explore these pages
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {quickLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex flex-col items-center text-center gap-3">
                                        {/* Icon Container */}
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300 group-hover:scale-110">
                                            <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={2.5} />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="font-black text-primary text-lg mb-1 group-hover:text-accent transition-colors duration-300">
                                                {link.label}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {link.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-400">
                        Need help? <Link to="/contact" className="text-accent hover:text-accent-hover font-bold underline decoration-2 underline-offset-2 transition-colors">Contact us</Link>
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
    );
};

export default NotFound;
