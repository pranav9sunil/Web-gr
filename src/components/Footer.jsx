import React from 'react';

const Footer = ({ data }) => {
    if (!data) return null;

    return (
        <footer className="bg-[var(--color-primary)] text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p className="whitespace-pre-line text-gray-300">{data.address}</p>
                    <a href={`mailto:${data.email}`} className="block mt-2 text-[var(--color-secondary)] font-bold">
                        {data.email}
                    </a>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        {data.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    {/* Additional footer content or logo could go here */}
                    <div className="opacity-50">
                        &copy; {new Date().getFullYear()} Destination Germany. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
