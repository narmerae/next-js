import React from 'react';
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
    return (
        <div className={inter.className}>
            <hr/>
            <h1>This is footer</h1>
        </div>
    );
};

export default Footer;