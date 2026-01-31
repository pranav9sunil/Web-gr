import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = ({ data }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (!data) return null;

    return (
        <header className="site-header bg-white shadow-sm fixed w-full z-50 top-0">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="logo font-bold text-2xl text-[var(--color-primary)]">
                    {data.logo}
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    {data.links.map((link, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={link.href}
                                className="flex items-center font-semibold text-gray-700 hover:text-[var(--color-secondary)] transition-colors py-2"
                            >
                                {link.label}
                                {link.sublinks && <ChevronDown size={16} className="ml-1" />}
                            </a>

                            {/* Dropdown */}
                            {link.sublinks && (
                                <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                                        {link.sublinks.map((sub, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href={sub.href}
                                                target={sub.external ? "_blank" : "_self"}
                                                rel={sub.external ? "noopener noreferrer" : ""}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[var(--color-secondary)] border-b border-gray-50 last:border-0"
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Link to={data.cta.href || "/contact"} className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
                        {data.cta.label || data.cta}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (simplified for now) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full max-h-screen overflow-y-auto">
                    {data.links.map((link, index) => (
                        <div key={index} className="py-2">
                            <div className="font-semibold text-gray-800">{link.label}</div>
                            {link.sublinks && (
                                <div className="pl-4 mt-1 space-y-2 border-l-2 border-gray-100 ml-1">
                                    {link.sublinks.map((sub, sIdx) => (
                                        <a
                                            key={sIdx}
                                            href={sub.href}
                                            className="block text-sm text-gray-600"
                                        >
                                            {sub.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
