import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    TrendingUp,
    Shield,
    PenTool
} from 'lucide-react';
import heroStudent from '../assets/hero-student.png';
import mathV2Image from '../assets/math-v2.png';
import satMasteryImage from '../assets/sat-mastery.jpg';
import mathImage from '../assets/math.png';
import techImage from '../assets/technology.png';
import collegeImage from '../assets/college-campus.png';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary pt-16 sm:pt-20 pb-12 sm:pb-16 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 tracking-tight">
                            Your Partner from 9th Grade to College Acceptance.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                            Expert online coaching for High School Math, AP Computer Science, SAT Prep, and College Applications.
                            We build the GPA and skills that colleges look for.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-xl text-white bg-accent/90 hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Book a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/programs" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-base sm:text-lg font-bold rounded-xl text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm">
                                View The Blueprint
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 3 Pillars of College Readiness */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">Start Early to Stand Out</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
                            College admissions are competitive. From building a strong GPA and achieving a top SAT score to crafting standout application essays, <span className="font-bold text-primary">K2C Prep is with you at every step of your journey.</span>
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch gap-8">
                        {/* Step 1: GPA Excellence */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex-1 w-full flex flex-col group overflow-hidden">
                            <div className="h-48 overflow-hidden relative">
                                <img src={mathV2Image} alt="Math and CS Excellence" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 sm:p-8 pt-4 flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-primary mb-2">Step 1: GPA Excellence</h3>
                                <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Math & Computer Science</h4>
                                <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                                    Build a strong academic foundation with expert support in high school math and computer science.
                                    We help students <strong className="text-primary font-bold">improve their high school GPA</strong> and master the subjects that matter most.
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Core Subjects</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Algebra 1", "Algebra 2", "Geometry", "Pre-Calc", "AP Computer Science A", "AP Computer Science Principles"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-blue-50 text-[11px] font-bold text-primary rounded-lg border border-blue-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 1 */}
                        <div className="hidden lg:flex items-center text-accent/30">
                            <ArrowRight className="h-10 w-10" strokeWidth={3} />
                        </div>

                        {/* Step 2: SAT Mastery */}
                        <div className="bg-white rounded-3xl shadow-lg border-t-8 border-accent hover:shadow-2xl transition-all hover:-translate-y-1 relative flex-1 w-full flex flex-col group overflow-hidden">
                            <div className="h-48 overflow-hidden relative">
                                <img src={satMasteryImage} alt="SAT Mastery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-6">
                                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                                        <TrendingUp className="h-6 w-6 text-accent" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 sm:p-8 pt-4 flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-primary mb-2">Step 2: SAT Mastery</h3>
                                <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Elite Test Scores</h4>
                                <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                                    Achieve your dream SAT score with personalized prep that goes beyond tricks.
                                    Our program builds deep <strong className="text-primary font-bold">conceptual understanding </strong>
                                    and test-taking confidence through rigorous practice.
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Included</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Math", "Reading & Writing", "Full Tests", "1-on-1 Reviews"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-amber-50 text-[11px] font-bold text-accent rounded-lg border border-amber-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 2 */}
                        <div className="hidden lg:flex items-center text-accent/30">
                            <ArrowRight className="h-10 w-10" strokeWidth={3} />
                        </div>

                        {/* Step 3: College Essays */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex-1 w-full flex flex-col group overflow-hidden">
                            <div className="h-48 overflow-hidden relative">
                                <img src={collegeImage} alt="College Essays" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg">
                                        <PenTool className="h-6 w-6 text-green-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 sm:p-8 pt-4 flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-primary mb-2">Step 3: College Essays</h3>
                                <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Stand Out to Admissions</h4>
                                <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                                    Craft compelling narratives that showcase your unique story.
                                    Our expert <strong className="text-primary font-bold">essay review</strong> helps you
                                    create authentic, memorable essays that resonate with admissions officers.
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Support for</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Main Essay", "Supplementals", "Brainstorming"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-green-50 text-[11px] font-bold text-green-700 rounded-lg border border-green-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="bg-primary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to build your blueprint?</h2>
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
