import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, data }) => {
    if (!data) return null;

    return (
        <div className="flex flex-col min-h-screen">
            <Header data={data.header} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer data={data.footer} />
        </div>
    );
};

export default Layout;
