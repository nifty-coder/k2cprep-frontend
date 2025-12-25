import React from 'react';
import {
    GraduationCap,
    Users,
    Target,
    BookOpen,
    Code,
    FileText,
    Check,
    X,
    Star,
    Award,
    Brain,
    Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const satComparisonData = [
        { feature: 'Class Size', lite: 'Max 7 Students', pro: 'Max 7 Students' },
        { feature: 'Instruction', lite: '15 Classes (2 hrs each)', pro: '15 Classes (2 hrs each)' },
        { feature: 'Practice', lite: '6 Full-Length Tests', pro: '12 Full-Length Tests', highlight: true },
        { feature: '1-on-1 Reviews', lite: '6 Test Reviews', pro: '12 Test Reviews', highlight: true },
        { feature: 'Doubt Clarification', lite: 'In-class only', pro: '15 Dedicated 1-on-1 Sessions', highlight: true },
        { feature: 'Duration', lite: 'Support ends after 6 tests', pro: 'Support through final SAT attempt', highlight: true },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-primary to-blue-700 pt-20 pb-24 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pathways to Success</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    From building strong foundations in High School to mastering the SAT and submitting college applications,
                    we have a program for every stage of the journey.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* SAT Prep Section */}
                <section id="sat-prep" className="-mt-12 sm:-mt-16 mb-16 sm:mb-24 scroll-mt-24">
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-t-4 border-accent">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-10">
                            <div className="bg-accent/10 p-3 sm:p-4 rounded-full">
                                <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">SAT Prep: The K2C Flagship</h2>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">Our signature program designed to maximize score improvements</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50">
                                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3" />
                                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Small Batches</h3>
                                <p className="text-sm sm:text-base text-gray-700">Max 7 students per class</p>
                            </div>
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50">
                                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3" />
                                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Concept Mastery</h3>
                                <p className="text-sm sm:text-base text-gray-700">We teach the "Why," not just the "How"</p>
                            </div>
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50 sm:col-span-2 lg:col-span-1">
                                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3" />
                                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Rigorous Practice</h3>
                                <p className="text-sm sm:text-base text-gray-700">Quizzes and full-length tests</p>
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-center text-primary mb-8 sm:mb-10">Choose Your Path</h3>

                        {/* Comparison Table */}
                        <div className="relative pt-12 sm:pt-3 overflow-visible">
                            <div className="relative overflow-x-auto pb-4 overflow-visible">
                                <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 pointer-events-none z-10" />
                                <table className="w-full border-collapse min-w-[600px] sm:min-w-0 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <thead>
                                        <tr className="bg-blue-800 text-white">
                                            <th className="p-4 sm:p-6 text-left w-1/3 align-bottom">Features</th>
                                            <th className="p-4 sm:p-6 text-center border-l border-blue-400 align-bottom">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-lg sm:text-2xl font-black">K2C Lite ($1500)</span>
                                                </div>
                                            </th>
                                            <th className="p-3 sm:p-6 text-center border-l border-blue-400 bg-green-800 relative align-bottom overflow-hidden group min-h-[90px] sm:min-h-0">
                                                {/* Corner Ribbon Price Tag - Responsive sizes */}
                                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-30">
                                                    <div className="absolute top-4 -right-10 sm:top-6 sm:-right-8 transform rotate-45 flex items-center justify-center">
                                                        {/* The Tag Body */}
                                                        <div className="bg-yellow-400 text-gray-900 text-[8px] sm:text-[10px] uppercase tracking-widest font-black pl-5 pr-8 sm:pl-6 sm:pr-10 py-0.5 sm:py-1 shadow-2xl whitespace-nowrap border-y sm:border-y-2 border-white relative flex items-center">
                                                            {/* The "Hole" in the tag */}
                                                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 shadow-inner border border-gray-300"></div>
                                                            Best Value
                                                            {/* Pointed Tip (Clip Path) */}
                                                            <div
                                                                className="absolute top-[-2px] right-[-10px] sm:right-[-12px] h-[calc(100%+4px)] w-3 sm:w-4 bg-yellow-400 border-r sm:border-r-2 border-white"
                                                                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <span className="text-base sm:text-2xl font-black">K2C Pro ($2500)</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {satComparisonData.map((row, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 last:border-0`}
                                            >
                                                <td className="p-4 sm:p-6 font-semibold text-gray-900 text-sm sm:text-base">
                                                    {row.feature}
                                                </td>
                                                <td className="p-4 sm:p-6 text-center border-l border-gray-100 text-sm sm:text-base text-gray-700">
                                                    {row.lite}
                                                </td>
                                                <td className={`p-4 sm:p-6 text-center border-l border-gray-100 ${row.highlight ? 'bg-green-50/50 font-bold text-green-800' : 'text-gray-700'} text-sm sm:text-base`}>
                                                    {row.pro}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-10 sm:mt-12 text-center">
                                <Link
                                    to="/sat-roadmap"
                                    className="w-full sm:w-auto inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105 active:scale-95"
                                >
                                    View SAT Roadmap
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Math Tutoring Section */}
                <section id="math-tutoring" className="mb-24 scroll-mt-24">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-green-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <BookOpen className="h-10 w-10 text-green-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">Math Tutoring</h2>
                                <p className="text-gray-600 mt-1">Move from "struggling" to "mastering"</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-6">

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-600" />
                                        Algebra 1
                                    </h4>
                                    <p className="text-gray-600">Building strong foundations in linear equations and functions</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-600" />
                                        Algebra 2
                                    </h4>
                                    <p className="text-gray-600">Mastering advanced functions, equations, and graphs—the core of the SAT</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-600" />
                                        Geometry
                                    </h4>
                                    <p className="text-gray-600">Visualization and proofs</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-600" />
                                        Pre-Calculus
                                    </h4>
                                    <p className="text-gray-600">Advanced preparation for high school success</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/contact"
                                state={{ program: 'Math Tutoring' }}
                                className="inline-block bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                            >
                                Enquire About Math Tutoring
                            </Link>
                        </div>
                    </div>
                </section >

                {/* Coding & Technology Section */}
                < section id="computer-science" className="mb-24 scroll-mt-24" >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-indigo-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-indigo-100 p-4 rounded-full">
                                <Code className="h-10 w-10 text-indigo-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">Computer Science</h2>
                                <p className="text-gray-600 mt-1">Stand out to college admissions officers with technical fluency</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* High School CS */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lightbulb className="h-6 w-6 text-indigo-600" />
                                    High School Computer Science
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">AP Computer Science A:</span>
                                            <span className="text-gray-700"> Ace the Java-based exam and earn college credit</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">AP Computer Science Principles:</span>
                                            <span className="text-gray-700"> Understanding the breadth of computing</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Skill-Building */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Star className="h-6 w-6 text-purple-600 fill-purple-600" />
                                    Skill-Building Courses
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Python Programming:</span>
                                            <span className="text-gray-700"> From basics to data handling</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Web Development:</span>
                                            <span className="text-gray-700"> Full-stack foundations with HTML, CSS, and JavaScript</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-gray-900">Cloud Computing:</span>
                                            <span className="text-gray-700"> Introduction to modern cloud architecture</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                to="/contact"
                                state={{ program: 'Computer Science' }}
                                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                            >
                                Enquire About CS Tutoring
                            </Link>
                        </div>
                    </div>
                </section >

                {/* College Admissions Section */}
                < section id="college-admissions" className="mb-24 scroll-mt-24" >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-purple-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-purple-100 p-4 rounded-full">
                                <FileText className="h-10 w-10 text-purple-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">College Application Support</h2>
                                <p className="text-gray-600 mt-1 text-lg italic">The final mile. We turn your hard work into a compelling narrative.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Review Service</h3>
                            <p className="text-gray-700 text-lg mb-6">
                                Your grades and scores get you in the door; your essay gets you the acceptance letter.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Lightbulb className="h-5 w-5 text-purple-600" />
                                        Personal Statement Strategy
                                    </h4>
                                    <p className="text-gray-600">Brainstorming unique angles for your Common App essay</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-purple-600" />
                                        Supplemental Essay Review
                                    </h4>
                                    <p className="text-gray-600">Tailoring responses for specific universities</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                                        <Award className="h-5 w-5 text-purple-600" />
                                        Holistic Application Polish
                                    </h4>
                                    <p className="text-gray-600">Ensuring your activities list and resume shine</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/contact"
                                state={{ program: 'College Admissions' }}
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                            >
                                Book an Application Review
                            </Link>
                        </div>
                    </div>
                </section >

                {/* Footer CTA */}
                < div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-2xl p-10 text-center" >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Building a roadmap for your student</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        We offer a free consultation to assess your student's current level and recommend the best roadmap.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                    >
                        Schedule Free Consultation
                    </Link>
                </div >
            </div >
        </div >
    );
};

export default Programs;
