import React from 'react';

const Testimonials = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] mb-16">
                    {data.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <blockquote className="text-gray-600 mb-6 italic">"{item.quote}"</blockquote>
                                <div className="flex items-center">
                                    <div>
                                        <h4 className="font-bold text-[var(--color-primary)] text-lg">{item.name}</h4>
                                        <span className="text-sm text-[var(--color-secondary)] font-semibold">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
