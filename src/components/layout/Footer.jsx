import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { contactData } from '../common/contactData';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                            {/* <BookOpen className="h-6 w-6 text-accent" /> */}
                            <span className="font-bold text-xl text-white tracking-wide">K2C Prep</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Unlocking every student’s true potential through personalized attention, deep conceptual learning, and rigorous, targeted practice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/vision" className="hover:text-accent transition-colors">Our Vision</Link></li>
                            <li><Link to="/why-k2c" className="hover:text-accent transition-colors">Why K2C Prep</Link></li>
                            <li><Link to="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
                            <li><Link to="/parents" className="hover:text-accent transition-colors">Parent Partnership</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Programs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/programs" className="hover:text-accent transition-colors">K2C SAT Prep (Lite & Pro)</Link></li>
                            <li><Link to="/programs" className="hover:text-accent transition-colors">Math Tutoring (Algebra, Geometry)</Link></li>
                            <li><Link to="/programs" className="hover:text-accent transition-colors">Computer Science & Cloud</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Academic Mentorship</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-accent" />
                                <a href={`mailto:${contactData.email}`} className="hover:text-white transition-colors">{contactData.email}</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-accent" />
                                <a href={`tel:${contactData.phone}`} className="hover:text-white transition-colors">{contactData.phone}</a>
                            </li>
                            <li className="flex gap-4 mt-2">
                                {contactData.instagram && (
                                    <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                        <Instagram className="h-6 w-6" />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                )}
                                {contactData.facebook && (
                                    <a href={contactData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                        <Facebook className="h-6 w-6" />
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                )}
                                {contactData.linkedin && contactData.linkedin !== '#' && (
                                    <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} K2C Prep. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
