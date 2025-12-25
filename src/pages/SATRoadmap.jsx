import React from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar,
    Target,
    BookOpen,
    TrendingUp,
    Award,
    ArrowRight,
    Search,
    PenTool,
    GraduationCap,
    CheckCircle2
} from 'lucide-react';

const SATRoadmap = () => {
    const roadmapData = [
        {
            grade: "Grade 10 (Sophomore)",
            title: "The Scholarship Route",
            status: "Summer after 9th grade or 10th grade",
            goal: "National Merit Status + Early Completion",
            opportunity: "This is the 'Golden Window' for testing. You have time to master concepts deeply rather than cramming.",
            strategy: "Start K2C Pro early to peak in time for the 11th Grade PSAT/NMSQT (National Merit Scholarship Qualifying Test).",
            timeline: {
                target: "Aim to finish your SAT testing by March of 11th Grade.",
                why: "Finishing early clears your schedule for May, allowing you to focus entirely on AP Exams and maintaining your GPA during the hardest academic semester."
            },
            recommendedPrograms: [
                { name: "K2C Pro (Mentorship & Mastery)", desc: "The comprehensive mentorship route for high achievers." }
            ],
            color: "green"
        },
        {
            grade: "Grade 11 (Junior)",
            title: "The Focused Track",
            status: "Summer after 10th grade or 11th grade",
            goal: "Maximize Efficiency & Finish Strong",
            opportunity: "You may have missed the window for National Merit (PSAT), but the door to top colleges is still wide open.",
            strategy: "We shift focus entirely to the SAT Score. A high SAT score is still the single best tool for unlocking Merit-Based Tuition Scholarships and college acceptance letters.",
            timeline: {
                target: "Finish your SAT testing before Senior Year starts.",
                why: "You want to enter your final summer with testing completely done. This ensures you can dedicate 100% of your summer to College Applications and Essays without the stress of juggling SAT prep."
            },
            recommendedPrograms: [
                { name: "K2C Lite (The Fast-Track)", desc: "A focused, streamlined approach to get your target score fast." }
            ],
            color: "blue"
        },
        {
            grade: "Grade 12 (Senior)",
            title: "The Finish Line",
            status: "Entering Senior Year",
            goal: "Perfecting the Application",
            opportunity: "Testing is complete—now it's time to tell your story.",
            strategy: "By Senior year, the testing phase should ideally be complete. Scores earn consideration, but your narrative secures the acceptance.",
            timeline: {
                target: "Submit all applications by November (Early Action/Decision).",
                why: "Early applicants often see higher acceptance rates and get financial aid packages sooner."
            },
            recommendedPrograms: [
                { name: "College Application Reviews", desc: "Turn good statistics into a compelling application narrative." }
            ],
            color: "accent"
        }
    ];

    const getColorClasses = (color) => {
        const classes = {
            blue: "border-blue-500 bg-blue-50 text-blue-700",
            indigo: "border-indigo-500 bg-indigo-50 text-indigo-700",
            green: "border-green-600 bg-green-50 text-green-800",
            purple: "border-purple-600 bg-purple-50 text-purple-800",
            gray: "border-gray-500 bg-gray-50 text-gray-700",
            yellow: "border-amber-500 bg-amber-50 text-amber-800",
            accent: "border-accent bg-orange-50 text-accent"
        };
        return classes[color] || classes.blue;
    };

    const getBadgeClasses = (color) => {
        const classes = {
            blue: "bg-blue-600",
            indigo: "bg-indigo-600",
            green: "bg-green-700",
            purple: "bg-purple-700",
            gray: "bg-gray-600",
            yellow: "bg-amber-500",
            accent: "bg-accent"
        };
        return classes[color] || classes.blue;
    };

    const getSidebarBgClasses = (color) => {
        const classes = {
            blue: "bg-blue-900",
            indigo: "bg-[#1e1b4b]", // indigo-950
            green: "bg-[#064e3b]", // green-950
            purple: "bg-[#4c1d95]", // purple-900 (strong purple)
            gray: "bg-[#374151]",   // gray-800
            yellow: "bg-[#78350f]", // amber-900
            accent: "bg-[#7c2d12]"  // orange-900
        };
        return classes[color] || classes.blue;
    };

    const getRecommendedIcon = (index) => {
        const icons = [
            <TrendingUp className="h-5 w-5" />,
            <BookOpen className="h-5 w-5" />,
            <Target className="h-5 w-5" />,
            <PenTool className="h-5 w-5" />
        ];
        return icons[index % icons.length];
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="bg-primary pt-20 pb-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        The K2C Roadmap: When Should You Start?
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        A top SAT score is built over time. Find your student's grade level below to see our recommended strategy.
                    </p>
                </div>
            </header>

            {/* Roadmap Timeline */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24">
                <div className="space-y-0">
                    {roadmapData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 transition-transform hover:-translate-y-1 duration-300 relative" style={{ borderLeftColor: item.color === 'accent' ? '#FF8C00' : (item.color === 'yellow' ? '#f59e0b' : (item.color === 'green' ? '#15803d' : (item.color === 'purple' ? '#7e22ce' : (item.color === 'gray' ? '#4b5563' : (item.color === 'indigo' ? '#4f46e5' : '#3b82f6'))))) }}>
                                <div className="p-6 md:p-8 lg:p-12">
                                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                                        {/* Header Left (Grade/Title) */}
                                        <div className="lg:col-span-3 space-y-3 lg:mb-4">
                                            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-sm ${getBadgeClasses(item.color)}`}>
                                                    {item.grade}
                                                </span>
                                                {item.status && (
                                                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-normal">
                                                        {item.status}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-tight">{item.title}</h2>
                                        </div>

                                        {/* Header Right (Core Objective) - aligned with sidebar width */}
                                        <div className="lg:col-span-2">
                                            <div className={`h-full p-4 sm:p-5 rounded-2xl border-2 shadow-sm ${getColorClasses(item.color)} font-bold flex flex-col items-center justify-center transition-transform hover:scale-105`}>
                                                <span className="text-[10px] uppercase tracking-widest mb-1 opacity-70 font-black">Core Objective</span>
                                                <span className="text-center text-sm sm:text-lg lg:text-md xl:text-lg">{item.goal}</span>
                                            </div>
                                        </div>

                                        {/* Content Left (Strategy & Timeline) */}
                                        <div className="lg:col-span-3 space-y-8 md:space-y-10">
                                            <div className="relative pl-4 sm:pl-6 border-l-4 border-accent/20">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                                    The Strategy
                                                </h3>
                                                {item.opportunity && (
                                                    <p className="text-primary text-sm sm:text-base font-bold mb-3 italic">
                                                        {item.opportunity}
                                                    </p>
                                                )}
                                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                                    {item.strategy}
                                                </p>
                                            </div>

                                            {item.timeline && (
                                                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                                                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                                        The Timeline
                                                    </h3>
                                                    <div className="grid sm:grid-cols-2 gap-6">
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-accent/10 rounded-xl shrink-0">
                                                                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 mb-1">Target Completion</div>
                                                                <div className="text-gray-900 text-sm sm:text-base font-bold leading-snug">{item.timeline.target}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-blue-50 rounded-xl shrink-0">
                                                                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 mb-1">K2C Rationale</div>
                                                                <div className="text-gray-600 text-[11px] sm:text-sm italic leading-relaxed">{item.timeline.why}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Sidebar Right (Recommended Program) */}
                                        <div className="lg:col-span-2">
                                            <div className={`${getSidebarBgClasses(item.color)} rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24 text-white shadow-2xl`}>
                                                <div className="mb-6 sm:mb-8">
                                                    <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                                                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                                        Recommended Program
                                                    </h3>
                                                </div>

                                                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                                                    {item.recommendedPrograms.map((program, idx) => (
                                                        <div key={idx} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/5 transition-colors hover:bg-white/15 flex gap-3 sm:gap-4">
                                                            <div className={`p-2 h-fit rounded-lg bg-white/10 text-white shrink-0`}>
                                                                {getRecommendedIcon(idx + index)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-extrabold text-white text-base sm:text-lg mb-1 sm:mb-2">{program.name}</h4>
                                                                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{program.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <Link
                                                    to="/contact"
                                                    state={{ program: item.grade + ' Roadmap' }}
                                                    className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-4 sm:py-5 ${getBadgeClasses(item.color)} hover:opacity-90 text-white font-black text-base sm:text-lg rounded-2xl transition-all shadow-xl hover:scale-[1.02] active:scale-95`}
                                                >
                                                    Contact to Enroll
                                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {index < roadmapData.length - 1 && (
                                <div className="flex flex-col items-center py-8">
                                    <div className="w-1 h-12 border-l-4 border-dashed border-blue-200"></div>
                                    <div className="bg-white rounded-full p-2 shadow-md border border-blue-100 -mt-1 group">
                                        <ArrowRight className="h-6 w-6 text-primary rotate-90 transform transition-transform group-hover:translate-y-1" />
                                    </div>
                                    <div className="w-1 h-12 border-l-4 border-dashed border-blue-200 -mt-1"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SATRoadmap;
