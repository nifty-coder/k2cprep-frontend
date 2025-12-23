import React from 'react';

const Vision = () => {
    return (
        <div className="bg-white">
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Vision</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        We aim to redefine test preparation by moving away from industrial education towards a model that values the individual.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
                {/* Core Value 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-primary mb-4">Personalized Attention</h2>
                        <div className="h-1 w-20 bg-accent mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Every student learns differently. Large batch classes often leave students behind or hold them back.
                            At K2C Prep, we tailor our instruction to fit the student, not the other way around.
                            Our mentors build relationships with students, understanding their fears, motivations, and learning styles.
                        </p>
                    </div>
                </div>

                {/* Core Value 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-primary mb-4">Deep Conceptual Understanding</h2>
                        <div className="h-1 w-20 bg-accent mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Standardized tests are designed to trick those who rely solely on memorized formulas.
                            We focus on building a robust foundation of knowledge. When a student truly understands the 'why'
                            behind a math concept or a grammar rule, they become adaptable and confident problem solvers.
                        </p>
                    </div>
                </div>

                {/* Core Value 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-primary mb-4">Targeted, Rigorous Practice</h2>
                        <div className="h-1 w-20 bg-accent mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Practice makes permanent. We ensure it makes perfect by assigning targeted exercises that address specific weaknesses.
                            Our curriculum is rigorous, designed to challenge students just enough to stimulate growth without causing burnout.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
