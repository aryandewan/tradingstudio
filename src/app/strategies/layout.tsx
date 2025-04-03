import React from "react";
import Nav from "@/components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-[#f2f2f2] verflow-x-hidden">
                <Nav/>
                {children}
            </body>
        </html>
    );
}