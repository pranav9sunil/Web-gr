import React from 'react';

const JobBoard = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 pt-32 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Search Bar mimic (optional visual only) */}
                <div className="max-w-3xl mx-auto mb-16 relative hidden md:block">
                    <div className="border border-gray-200 rounded-lg p-3 text-center text-gray-400 text-sm">
                        Search by job title, keyword, etc.
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Mission */}
                    <div className="md:w-1/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold italic text-[var(--color-primary)] mb-8 leading-tight">
                            {data.missionTitle}
                        </h2>
                        <div className="flex justify-center md:justify-start">
                            <div className="w-48 h-48 relative">
                                {/* Using a placeholder for the unique logo shape if needed, or just the image */}
                                <img
                                    src={data.missionLogo}
                                    alt="Mission Logo"
                                    className="w-full h-full object-cover rounded-full shadow-lg" // specific styling to try to match 'pin' look or just circle
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Job List */}
                    <div className="md:w-2/3">
                        <div className="mb-8 border-b border-gray-200 pb-2">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.jobListTitle}</h1>
                            <p className="text-sm text-gray-500 font-semibold">{data.jobCount}</p>
                        </div>

                        <div className="space-y-6">
                            {data.jobs.map((job, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors px-2 rounded-lg">
                                    <h3 className="text-lg font-medium text-gray-700 mb-4 sm:mb-0 pr-4">
                                        {job.title}
                                    </h3>
                                    <div className="flex gap-2 shrink-0">
                                        <a
                                            href={job.applyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[var(--color-primary)] text-white px-6 py-2 rounded text-sm font-bold hover:bg-opacity-90 transition-opacity"
                                        >
                                            Apply
                                        </a>
                                        <button className="bg-black text-white px-6 py-2 rounded text-sm font-bold hover:bg-gray-800 transition-colors">
                                            Recommend
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobBoard;
