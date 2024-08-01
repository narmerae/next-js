import React from 'react';
import {Inter} from "next/font/google";
import Link from "next/link";
import RootLayout from "@/components/RootLayout";
const inter = Inter({ subsets: ["latin"] });

const error404 = () => {
    return (
        <div className={inter.className}>
            <h1>Error 404 </h1>
            <p>Page doesn&apos;t exist!</p>
            <Link href={"/"}>Home</Link>

        </div>
    );
};
error404.getLayout = (page) => {
    return <RootLayout showHeader={false} showFooter={false}>{page}</RootLayout>
}

export default error404;