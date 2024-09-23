import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Support = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
                    <p>Your blog content goes here...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Support;