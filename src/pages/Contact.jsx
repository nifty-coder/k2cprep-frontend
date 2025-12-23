import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { contactData } from '../components/common/contactData';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        program: location.state?.program || 'K2C Pro ($2500)'
    });
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success', 'error', 'loading'

    useEffect(() => {
        if (location.state?.program) {
            setFormData(prev => ({ ...prev, program: location.state.program }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Phone number restriction: allow only numbers
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '');
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validateEmail = async (email) => {
        // 1. Basic Syntax Check
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return { valid: false, message: "Please enter a valid email address format." };
        }

        // 2. Abstract API Validation
        const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;

        if (!apiKey) {
            console.error("Abstract API Key missing.");
            return { valid: false, message: "System configuration error: Validation API key missing. Check your .env setup." };
        }

        try {
            const response = await fetch(`https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
            const data = await response.json();

            if (data.email_deliverability.status === "undeliverable") {
                return { valid: false, message: "This email domain does not exist or cannot receive emails." };
            } else if (data.email_quality.is_disposable === true) {
                return { valid: false, message: "Please use a permanent email address (no disposable emails)." };
            } else {
                return { valid: true };
            }
        } catch (error) {
            console.error("Email validation API error:", error);
            // Fallback to allowing submission if API fails so we don't block users due to technical issues
            return { valid: true };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate Email
        setStatus('Validating email...');
        setStatusType('loading');

        const emailValidation = await validateEmail(formData.email);
        if (!emailValidation.valid) {
            setStatus(emailValidation.message);
            setStatusType('error');
            return;
        }

        setStatus('Sending...');
        setStatusType('loading');

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Thank you! We will reach out to you shortly.');
                setStatusType('success');
                setFormData({ name: '', email: '', phone: '', message: '', program: 'K2C Pro ($2500)' });
            } else {
                setStatus(result.message || 'Something went wrong. Please try again.');
                setStatusType('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Please try again later.');
            setStatusType('error');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-500">We're here to answer your questions and help you get started.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-primary text-white rounded-2xl p-10 shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <a href={`tel:${contactData.phone}`} className="text-blue-100 hover:text-white transition-colors">{contactData.phone}</a>
                                        <p className="text-sm text-blue-200 mt-1">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href={`mailto:${contactData.email}`} className="text-blue-100 hover:text-white transition-colors">{contactData.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-blue-800">
                            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {contactData.instagram && (
                                    <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                        <Instagram className="h-5 w-5" />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                )}
                                {contactData.facebook && (
                                    <a href={contactData.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                        <Facebook className="h-5 w-5" />
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                )}
                                {contactData.linkedin && contactData.linkedin !== '#' && (
                                    <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-10 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status && (
                                <div className={`p-4 rounded-md text-sm font-medium ${statusType === 'error' ? 'bg-red-50 text-red-700' :
                                    statusType === 'loading' ? 'bg-blue-50 text-blue-700' :
                                        'bg-green-50 text-green-700'
                                    }`}>
                                    {status}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                    placeholder="Parent or Student Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <div>
                                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                                <select
                                    id="program"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                >
                                    <option>K2C Pro ($2500)</option>
                                    <option>K2C Lite ($1500)</option>
                                    <option>Math Tutoring</option>
                                    <option>Technology & CS</option>
                                    <option>Academic Mentorship</option>
                                    <option>Other / Unsure</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                    placeholder="Tell us about the student's goals and challenges..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
