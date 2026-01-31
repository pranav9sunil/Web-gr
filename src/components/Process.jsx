import React from 'react';

const Process = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] mb-16">
                    {data.title}
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {data.steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                {/* Text Content */}
                                <div className="md:w-1/2 md:px-10 text-center md:text-left">
                                    <div className={`p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>

                                        {/* Triangle pointer (optional CSS needed, skipping for simplicity) */}
                                    </div>
                                </div>

                                {/* Number Circle */}
                                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center font-bold text-xl z-10 my-4 md:my-0 shadow-lg border-4 border-white">
                                    {index + 1}
                                </div>

                                {/* Empty space for the other side */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
