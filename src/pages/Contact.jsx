import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Send, Instagram, Facebook, Linkedin, ChevronDown } from 'lucide-react';
import { contactData } from '../components/common/contactData';
import { apiUrl } from '../../apiUrl';

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

        // Phone number restriction: allow only numbers and limit to 10 digits
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
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

        try {
            const response = await fetch(`${apiUrl}/api/validate-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();

            if (data.valid === false) {
                return { valid: false, message: data.message };
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

        // Validate Phone Number Length
        if (formData.phone.length !== 10) {
            setStatus('Please enter a valid 10-digit phone number.');
            setStatusType('error');
            return;
        }

        setStatus('Sending...');
        setStatusType('loading');

        if (!apiUrl && import.meta.env.PROD) {
            setStatus('System configuration error: API URL is missing.');
            setStatusType('error');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Server responded with ${response.status}`);
            }

            const result = await response.json();

            setStatus('Thank you! We will reach out to you shortly.');
            setStatusType('success');
            setFormData({ name: '', email: '', phone: '', message: '', program: 'K2C Pro ($2500)' });

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus(error.message || 'Failed to send message. Please try again later.');
            setStatusType('error');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Visual Divider / Accent */}
                    <div className="flex justify-center mb-6">
                        <div className="h-1.5 w-24 bg-accent rounded-full"></div>
                    </div>

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">Let's Build Your Path</h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Questions about our curriculum? Want to schedule a consultation?
                            Fill out the form below and we'll be in touch within 24 hours.
                        </p>
                    </div>

                    {/* Contact Channel Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:shadow-2xl transition-all">
                            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                <Phone className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <div className="text-xs font-black text-accent uppercase tracking-widest mb-1">Call Us</div>
                                <a href={`tel:${contactData.phone}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                                    {contactData.phone}
                                </a>
                                <p className="text-xs text-gray-500 mt-1 font-medium italic">Mon-Sun 10am-8pm CST</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:shadow-2xl transition-all">
                            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                <Mail className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <div className="text-xs font-black text-accent uppercase tracking-widest mb-1">Email Us</div>
                                <a href={`mailto:${contactData.email}`} className="text-lg font-bold text-primary hover:text-accent transition-colors break-all sm:break-normal">
                                    {contactData.email}
                                </a>
                                <p className="text-xs text-gray-500 mt-1 font-medium italic">General Inquiries</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-black text-primary uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-black text-primary uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                                        placeholder="name@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-black text-primary uppercase tracking-wider ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                                        placeholder="(XXX) XXX-XXXX"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="program" className="text-sm font-black text-primary uppercase tracking-wider ml-1">Interested Program</label>
                                    <div className="relative">
                                        <select
                                            id="program"
                                            name="program"
                                            value={formData.program}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-gray-900 font-bold appearance-none cursor-pointer pr-12"
                                        >
                                            <option>SAT Prep</option>
                                            <option>Math Tutoring</option>
                                            <option>Computer Science</option>
                                            <option>Cloud Computing</option>
                                            <option>College Application Support</option>
                                            <option>Other / Unsure</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronDown className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-black text-primary uppercase tracking-wider ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400 resize-none"
                                    placeholder="Enter your message here..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={statusType === 'loading'}
                                    className="w-full bg-accent hover:bg-accent-hover text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/40 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
                                >
                                    {statusType === 'loading' ? 'Sending...' : 'Send Message'}
                                    <Send className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${statusType === 'loading' ? 'animate-pulse' : ''}`} />
                                </button>

                                {status && (
                                    <div className={`mt-6 p-6 rounded-2xl text-sm font-bold border-2 animate-in fade-in slide-in-from-top-4 duration-300 ${statusType === 'error' ? 'bg-red-50 border-red-100 text-red-700' :
                                        statusType === 'loading' ? 'bg-blue-50 border-blue-100 text-blue-700' :
                                            'bg-green-50 border-green-100 text-green-800 shadow-lg shadow-green-100'
                                        }`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`h-2 w-2 rounded-full ${statusType === 'error' ? 'bg-red-500' : statusType === 'loading' ? 'bg-blue-500 animate-ping' : 'bg-green-500'}`}></div>
                                            {status}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
