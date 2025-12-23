import React from 'react';
import {
    Users,
    Clock,
    BookOpen,
    FileText,
    HelpCircle,
    ClipboardList,
    FileCheck,
    Headphones,
    Mail,
    Calendar,
    Check,
    X,
    Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ title, price, isPro, features }) => {
    return (
        <div className={`relative bg-white rounded-2xl shadow-xl border-2 ${isPro ? 'border-accent transform md:-translate-y-4' : 'border-gray-200'} flex flex-col overflow-hidden`}>
            {isPro && (
                <div className="absolute top-0 right-0">
                    <div className="bg-accent text-white text-xs font-bold px-8 py-1 rotate-45 transform translate-x-8 translate-y-4 shadow-sm uppercase tracking-wider">
                        Best Value
                    </div>
                </div>
            )}

            <div className={`${isPro ? 'bg-primary text-white' : 'bg-green-50 text-primary'} p-6 text-center border-b border-gray-100`}>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <div className="text-3xl font-extrabold text-accent">{price}</div>
            </div>

            <div className="p-8 flex-1">
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className={`mt-1 shrink-0 ${isPro ? 'text-accent' : 'text-green-600'}`}>
                                {feature.icon}
                            </div>
                            <span className="text-gray-700 text-sm font-medium leading-tight">
                                <span className="font-bold text-gray-900 block mb-0.5">{feature.label}</span>
                                {feature.value}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link
                    to="/contact"
                    state={{ program: title }}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-colors ${isPro
                        ? 'bg-accent hover:bg-accent-hover text-white'
                        : 'bg-primary hover:bg-primary-light text-white'
                        }`}
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

const Programs = () => {
    const liteFeatures = [
        { icon: <Users className="h-5 w-5" />, label: "Batch Size", value: "Max 7 students" },
        { icon: <Clock className="h-5 w-5" />, label: "Number of Classes", value: "15 classes (2 hours each)" },
        { icon: <BookOpen className="h-5 w-5" />, label: "Material Provided", value: "Yes" },
        { icon: <FileText className="h-5 w-5" />, label: "Worksheets on each topic", value: "Yes" },
        { icon: <HelpCircle className="h-5 w-5 text-gray-400" />, label: "1-on-1 Doubt Clarification", value: "None" },
        { icon: <ClipboardList className="h-5 w-5" />, label: "Quiz after every 5 weeks", value: "Yes" },
        { icon: <FileCheck className="h-5 w-5" />, label: "Full-length Tests", value: "6 Tests" },
        { icon: <Headphones className="h-5 w-5" />, label: "1-on-1 Test Review", value: "6 Sessions (60 mins each)" },
        { icon: <Mail className="h-5 w-5" />, label: "Progress sent to parents", value: "Yes" },
        { icon: <Calendar className="h-5 w-5" />, label: "Support Ends", value: "Once curriculum & reviews end" },
    ];

    const proFeatures = [
        { icon: <Users className="h-5 w-5" />, label: "Batch Size", value: "Max 7 students" },
        { icon: <Clock className="h-5 w-5" />, label: "Number of Classes", value: "15 classes (2 hours each)" },
        { icon: <BookOpen className="h-5 w-5" />, label: "Material Provided", value: "Yes" },
        { icon: <FileText className="h-5 w-5" />, label: "Worksheets on each topic", value: "Yes" },
        { icon: <HelpCircle className="h-5 w-5" />, label: "1-on-1 Doubt Clarification", value: "15 Sessions (45 mins each)" },
        { icon: <ClipboardList className="h-5 w-5" />, label: "Quiz after every 5 weeks", value: "Yes" },
        { icon: <FileCheck className="h-5 w-5" />, label: "Full-length Tests", value: "12 Tests" },
        { icon: <Headphones className="h-5 w-5" />, label: "1-on-1 Test Review", value: "12 Sessions (60 mins each)" },
        { icon: <Mail className="h-5 w-5" />, label: "Progress sent to parents", value: "Yes" },
        { icon: <Star className="h-5 w-5 fill-accent text-accent" />, label: "Support Continues", value: "Through your final SAT attempt" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-primary pt-20 pb-24 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">K2C Program Options</h1>
                <p className="text-xl text-blue-200">Choose your path to success in SAT</p>
            </div>

            {/* Cards Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <ProgramCard
                        title="K2C Lite"
                        price="$1500"
                        features={liteFeatures}
                        isPro={false}
                    />
                    <ProgramCard
                        title="K2C Pro"
                        price="$2500"
                        features={proFeatures}
                        isPro={true}
                    />
                </div>

                {/* Additional Programs Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Additional Academic Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Math Tutoring */}
                        <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-500 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <ClipboardList className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Math Tutoring</h3>
                            </div>
                            <p className="text-gray-600 mb-6">Comprehensive support for high school math curriculum, building strong foundations for future success.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-blue-500" /> Algebra 1
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-blue-500" /> Algebra 2
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-blue-500" /> Geometry
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-blue-500" /> Precalculus
                                </div>
                            </div>
                            <Link
                                to="/contact"
                                state={{ program: "Math Tutoring" }}
                                className="block w-full text-center py-3 px-6 rounded-lg font-bold bg-primary hover:bg-primary-light text-white transition-colors mt-8"
                            >
                                Enroll Now
                            </Link>
                        </div>

                        {/* Computer Science */}
                        <div className="bg-white rounded-xl shadow-md border-l-4 border-indigo-500 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-indigo-100 p-3 rounded-full">
                                    <FileText className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Technology & CS</h3>
                            </div>
                            <p className="text-gray-600 mb-6">Prepare for the future with our specialized technology and computer science courses.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-indigo-500" /> Cloud Computing
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-indigo-500" /> AP Computer Science A
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <Check className="h-5 w-5 text-indigo-500" /> AP Computer Science Principles
                                </li>
                            </ul>
                            <Link
                                to="/contact"
                                state={{ program: "Technology & CS" }}
                                className="block w-full text-center py-3 px-6 rounded-lg font-bold bg-primary hover:bg-primary-light text-white transition-colors mt-8"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        "Structured learning combined with the dedicated one-on-one support your child deserves"
                    </h2>
                </div>

                {/* FAQ / Contact Teaser */}
                <div className="mt-16 text-center bg-white p-10 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 mb-6">Need help deciding which programs fits your goals?</p>
                    <Link to="/contact" className="text-accent font-bold text-lg hover:underline flex items-center justify-center gap-2">
                        Talk to an Academic Advisor <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Programs;
