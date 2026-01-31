import React from 'react';
import * as Icons from 'lucide-react';

const Features = ({ data }) => {
    if (!data) return null;

    const getIcon = (iconName) => {
        // Convert kebab-case to PascalCase (e.g. map-pin -> MapPin)
        const pascalName = iconName
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');

        const IconComponent = Icons[pascalName] || Icons.HelpCircle;
        return <IconComponent size={40} strokeWidth={1.5} />;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] mb-16">
                    {data.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="text-[var(--color-secondary)] mb-6 bg-pink-50 p-4 rounded-full">
                                {getIcon(item.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
