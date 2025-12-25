import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    BookOpen,
    Code,
    TrendingUp,
    GraduationCap,
    Shield,
    Award,
    PenTool
} from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary pt-16 sm:pt-20 pb-12 sm:pb-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
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
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex-1 w-full flex flex-col group">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                                <Shield className="h-7 w-7 text-primary" />
                            </div>
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

                        {/* Arrow 1 */}
                        <div className="hidden lg:flex items-center text-accent/30">
                            <ArrowRight className="h-10 w-10" strokeWidth={3} />
                        </div>

                        {/* Step 2: SAT Mastery */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-8 border-accent hover:shadow-2xl transition-all hover:-translate-y-1 relative flex-1 w-full flex flex-col group">
                            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                                <TrendingUp className="h-7 w-7 text-accent" />
                            </div>
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

                        {/* Arrow 2 */}
                        <div className="hidden lg:flex items-center text-accent/30">
                            <ArrowRight className="h-10 w-10" strokeWidth={3} />
                        </div>

                        {/* Step 3: College Essays */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex-1 w-full flex flex-col group">
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                                <PenTool className="h-7 w-7 text-green-600" />
                            </div>
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
