import React from 'react';

const TeamGrid = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.members.map((member, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-gray-50"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-400 font-medium uppercase text-sm tracking-wide">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
