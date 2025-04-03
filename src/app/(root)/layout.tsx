import React from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white overflow-x-hidden">
                <Navbar/>
                {children}
            </body>
        </html>
    );
}