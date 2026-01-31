import React from 'react';

const Partners = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold text-gray-400 mb-10 uppercase tracking-wider">
                    {data.title}
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {data.logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="h-12 md:h-16 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
