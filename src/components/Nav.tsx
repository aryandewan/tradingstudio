'use client'

import React, {useState} from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    const [login, setLogin] = useState(false)

    const loginHandler = () => {
        setLogin(prev => !prev)
    }
    return (
        <header className="w-full">
            <nav className="w-full flex items-center justify-between p-5 bg-blue-50">
                <div className="text-center">
                    <Link href="/">
                        <h1 className="text-2xl font-semibold cursor-pointer">
                            Trading Studio
                        </h1>
                    </Link>
                </div>
                <div className="text-center flex flex-row gap-3">
                    <h1 className="text-2xl font-semibold">User</h1>
                    <Link href="/" onClick={loginHandler}>
                        <Button className="cursor-pointer hover:bg-[#6c63ff] hover:text-black">
                            LogOut
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
