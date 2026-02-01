import React from 'react';

const AboutHero = ({ data }) => {
    if (!data) return null;

    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center relative">

                    {/* Text Content */}
                    <div className="md:w-1/2 z-10 mb-10 md:mb-0">
                        <div className="mb-8">
                            <p className="text-gray-500 text-lg mb-2">{data.subtitle}</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight">
                                {data.title}
                            </h1>
                        </div>

                        {/* Dark Blue Overlay Box */}
                        <div className="bg-[var(--color-primary)] text-white p-8 md:p-12 rounded-lg shadow-xl md:max-w-xl md:absolute md:bottom-0 md:translate-y-12">
                            <p className="text-xl leading-relaxed">
                                {data.overlayText}
                            </p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="md:w-1/2 flex justify-end">
                        <div className="w-full max-w-lg">
                            <img
                                src={data.image}
                                alt="About Hero"
                                className="w-full h-auto object-cover rounded-lg shadow-lg aspect-[4/5] object-top"
                            />
                        </div>
                    </div>

                </div>
                {/* Spacer for the overlapping box on desktop */}
                <div className="hidden md:block h-24"></div>
            </div>
        </section>
    );
};

export default AboutHero;
