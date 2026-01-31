import React from 'react';

const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <section className="bg-gray-50 pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg">
                        {data.subtitle}
                    </p>
                    <button className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
                        {data.cta}
                    </button>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                        <img
                            src={data.image}
                            alt="Hero"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-[var(--color-primary)] rounded-2xl opacity-10 z-0 transform translate-x-4 translate-y-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
