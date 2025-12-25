import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, Target, CheckCircle } from 'lucide-react';

const WhyK2C = () => {
    return (
        <div className="bg-white">
            {/* Section 1: Our Philosophy (The Core) */}
            <section className="py-24 bg-primary ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Why K2C Prep?</h2>
                    <div className="space-y-6 text-lg text-white leading-relaxed font-medium">
                        <p>
                            We reject the "factory model" of education. Whether it is a high schooler learning Python or preparing for the SAT,
                            we don't just teach them <em>what</em> to think; we teach them <strong className="text-white">how to think</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Strip - High Impact */}
            <section className="bg-accent py-12 shadow-2xl relative z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-widest">Our Vision</h2>
                    <p className="text-xl sm:text-2xl font-semibold leading-relaxed italic">
                        To unlock every student's true potential by combining personalized attention with deep conceptual learning and rigorous practice.
                    </p>
                </div>
            </section>

            {/* Section 2: The K2C Difference (The 4 Pillars) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary">Differentiators of K2C Prep</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Pillar 1: Personalized Attention */}
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">1. Hyper-Personalized Attention</h3>
                            <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">Max 7 Students</div>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                Most tutoring centers pack 20–30 students into a room. We cap our batches at 7 students.
                                This ensures your child never gets lost in the crowd.
                            </p>
                            <div className="mt-auto bg-blue-50 p-3 rounded-lg flex gap-3 text-xs sm:text-sm text-primary font-medium">
                                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                                <span>We spot gaps immediately and fix them before they become roadblocks.</span>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <Brain className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">2. Concepts First, Techniques Next</h3>
                            <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">The "Why" Before the "How"</div>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                Standard coaching often focuses on short-term memorization or "test hacks." We focus on Mastery.
                            </p>
                            <ul className="mt-auto space-y-2 bg-amber-50/50 p-3 rounded-lg">
                                <li className="text-[11px] sm:text-sm text-gray-700 font-medium flex items-center gap-2">
                                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                                    <span><span className="text-primary mr-1">Math:</span> Logic behind formulas.</span>
                                </li>
                                <li className="text-[11px] sm:text-sm text-gray-700 font-medium flex items-center gap-2">
                                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                                    <span><span className="text-primary mr-1">SAT:</span> Underlying concepts.</span>
                                </li>
                                <li className="text-[11px] sm:text-sm text-gray-700 font-medium flex items-center gap-2">
                                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                                    <span><span className="text-primary mr-1">Coding:</span> Algorithmic thinking.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Target className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">3. Rigorous Practice</h3>
                            <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">Game-Ready Confidence</div>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                From weekly assignments and quizzes to proctored full-length practice tests, our students are "game-ready" long before exam day.
                            </p>
                            <div className="mt-auto bg-green-50 p-3 rounded-lg flex gap-3 text-xs sm:text-sm text-green-800 font-medium">
                                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                                <span>Eliminate anxiety through elite preparation.</span>
                            </div>
                        </div>

                        {/* Pillar 4: Parent Partnership */}
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">4. Parent Partnership</h3>
                            <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">No More Guesswork</div>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                Active partnership with detailed weekly reports on progress, mastery, and areas for improvement sent to parents.
                            </p>
                            <div className="mt-auto bg-purple-50 p-3 rounded-lg flex gap-3 text-xs sm:text-sm text-purple-800 font-medium">
                                <CheckCircle className="h-4 w-4 text-purple-600 shrink-0" />
                                <span>Weekly analytics and regular mentor check-ins.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to experience the K2C difference?</h2>
                        <p className="text-blue-200">Schedule your free initial consultation today.</p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-primary bg-white hover:bg-gray-100 transition-colors">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhyK2C;
