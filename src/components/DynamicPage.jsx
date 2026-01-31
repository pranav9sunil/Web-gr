import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Process from './Process';
import Partners from './Partners';
import JobBoard from './JobBoard';

const SECTION_COMPONENTS = {
    hero: Hero,
    features: Features,
    testimonials: Testimonials,
    process: Process,
    partners: Partners,
    'job-board': JobBoard,
};

const DynamicPage = ({ pageData }) => {
    if (!pageData || !pageData.sections) {
        return <div className="pt-32 text-center">Page content not found.</div>;
    }

    return (
        <div>
            {pageData.sections.map((section, index) => {
                const Component = SECTION_COMPONENTS[section.type];
                if (!Component) {
                    console.warn(`Unknown section type: ${section.type}`);
                    return null;
                }
                return <Component key={index} data={section.data} />;
            })}
        </div>
    );
};

export default DynamicPage;
