import React from 'react';

const TextBlock = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
                    {data.heading}
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    {data.paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TextBlock;
