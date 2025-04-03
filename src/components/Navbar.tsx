'use client'

import React, {useState} from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    const [login, setLogin] = useState(false)
    const sections = ["Features", "Pricing", "FAQ", "Contact Us"]

    const loginHandler = () => {
        setLogin(prev => !prev)
        console.log(login)
    }
    return (
        <header className="w-full fixed">
            <nav className="w-full flex items-center justify-between p-5 bg-blue-50">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold cursor-pointer">
                        Trading Studio
                    </h1>
                </div>
                <div className="text-center flex items-center justify-center gap-7">
                    {sections.map((section, i) => (
                        <Link href={`/#${section.toLowerCase()}`} key={i} className="hover:text-[#6c63ff] hover:italic">
                            <h1 className="text-xl font-semibold cursor-pointer">
                                {section}
                            </h1>
                        </Link>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/strategies" onClick={loginHandler}>
                        <Button className="cursor-pointer hover:bg-[#6c63ff] hover:text-black">
                            Login
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
