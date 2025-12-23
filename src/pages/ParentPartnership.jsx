import React from 'react';
import { Mail, MessageCircle, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParentPartnership = () => {
    return (
        <div className="bg-white">
            <div className="bg-primary-dark py-16 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Partners in Success</h1>
                    <p className="text-xl text-gray-300">We believe parents are a crucial part of the team.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">No More Guesswork</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            In traditional prep centers, parents often pay the fees and hear nothing until the test scores come back.
                            At K2C Prep, we change that. We treat parents as active partners in their child's educational journey.
                            You'll know exactly what your student is working on, where they are struggling, and how they are improving.
                        </p>
                        <Link to="/contact" className="text-accent font-bold text-lg hover:underline">
                            Get in touch with us &rarr;
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg h-fit">
                                <BarChart2 className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Progress Reports</h3>
                                <p className="text-gray-600">Detailed analytics on homework performance, mock test scores, and concept mastery.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg h-fit">
                                <MessageCircle className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Check-ins</h3>
                                <p className="text-gray-600">Scheduled calls with mentors to discuss strategy, motivation, and adjustments to the study plan.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg h-fit">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Open Line of Communication</h3>
                                <p className="text-gray-600">Direct access to your child's mentor via email or phone for any questions or concerns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentPartnership;
