import React from 'react';
import { X, Check } from 'lucide-react';

const WhyK2C = () => {
    return (
        <div className="bg-white">
            <div className="bg-primary py-16 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Why K2C Prep?</h1>
                    <p className="text-xl text-blue-200">See the difference between standard tutoring and our approach.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Traditional Prep */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-500 mb-6 text-center">Traditional Prep</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <X className="h-6 w-6 text-red-400 shrink-0" />
                                <span>Large batch sizes with generic instruction</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <X className="h-6 w-6 text-red-400 shrink-0" />
                                <span>Focus on "tips and tricks" over understanding</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <X className="h-6 w-6 text-red-400 shrink-0" />
                                <span>One-size-fits-all homework assignments</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <X className="h-6 w-6 text-red-400 shrink-0" />
                                <span>No mentorship or emotional support</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <X className="h-6 w-6 text-red-400 shrink-0" />
                                <span>Parents left in the dark until the exam</span>
                            </li>
                        </ul>
                    </div>

                    {/* K2C Prep */}
                    <div className="bg-white p-8 rounded-xl border-2 border-primary shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            The Best Choice
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">K2C Prep</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-primary font-medium">
                                <Check className="h-6 w-6 text-green-500 shrink-0" />
                                <span>1-on-1 or small group personalized attention</span>
                            </li>
                            <li className="flex items-start gap-3 text-primary font-medium">
                                <Check className="h-6 w-6 text-green-500 shrink-0" />
                                <span>Deep conceptual learning for lasting results</span>
                            </li>
                            <li className="flex items-start gap-3 text-primary font-medium">
                                <Check className="h-6 w-6 text-green-500 shrink-0" />
                                <span>Targeted practice based on your data</span>
                            </li>
                            <li className="flex items-start gap-3 text-primary font-medium">
                                <Check className="h-6 w-6 text-green-500 shrink-0" />
                                <span>Dedicated mentorship and academic guidance</span>
                            </li>
                            <li className="flex items-start gap-3 text-primary font-medium">
                                <Check className="h-6 w-6 text-green-500 shrink-0" />
                                <span>Regular progress reports and parent partnership</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyK2C;
