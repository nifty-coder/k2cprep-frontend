import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, UserCheck, Brain, TrendingUp } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary pt-20 pb-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Personalized SAT Prep <span className="text-accent">That Actually Works</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Unlock your true potential with K2C Prep. We combine one-on-one mentorship, deep conceptual learning, and rigorous practice to help you achieve your dream score.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-accent hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Book a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/programs" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary transition-all">
                                View Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Statement */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">"Unlock every student’s true potential."</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At K2C Prep, we believe that test prep shouldn't be a one-size-fits-all conveyor belt.
                        By combining personalized attention with deep conceptual learning and rigorous, targeted practice,
                        we give students the keys to college success.
                    </p>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary">Why Families Choose K2C Prep</h2>
                        <p className="mt-4 text-xl text-gray-500">The K2C difference lies in our approach.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <UserCheck className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">True Personalization</h3>
                            <p className="text-gray-600">
                                No crowded classrooms. We provide 1-on-1 mentorship tailored to your student's unique strengths and weaknesses.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <Brain className="h-7 w-7 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Deep Conceptual Learning</h3>
                            <p className="text-gray-600">
                                We don't just teach tricks. We ensure students understand the underlying concepts so they can tackle any problem.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="h-7 w-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Data-Driven Progress</h3>
                            <p className="text-gray-600">
                                Continuous tracking and regular reports keep parents in the loop and students on the path to improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="bg-primary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to start your journey?</h2>
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

export default Home;
