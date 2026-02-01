import React from 'react';

const VisionMission = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pl-4">
                            {data.vision.title}
                        </h3>
                        <p className="text-gray-600 text-lg pl-4">
                            {data.vision.text}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pl-4">
                            {data.mission.title}
                        </h3>
                        <p className="text-gray-600 text-lg pl-4">
                            {data.mission.text}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
