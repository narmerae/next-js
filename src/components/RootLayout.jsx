import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootLayout = ({ children, showFooter = true, showHeader = true }) => {
    return (
        <div>
            {showHeader && <Header/>}
            <main>{children}</main>
            {showFooter && <Footer/>}
        </div>
    );
};

export default RootLayout;
