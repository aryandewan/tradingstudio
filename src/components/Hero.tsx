import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <section id="hero" className="min-h-dvh w-full flex items-center justify-center cursor-default">
            <div className="w-full h-full p-5 flex flex-col gap-10 m-5">
                <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center w-1/2">
                    <p className="text-xl font-semibold text-blue-500">
                        Unleash Your Trading Potential, Step by Step
                    </p>
                </div>
                <h1 className="text-[6.5rem] leading-none font-bold">
                    Master Markets with Strategies
                </h1>
                <p className="text-2xl text-gray-600">
                    Build, Test, and Succeed—All in One Place,<br/>
                    Turn Insights into Profits with Precision Trading
                </p>

                <div className="flex">
                    <Link href="/strategies" className="cursor-pointer">
                        <Button type="button" className="text-xl !px-5 !py-3 rounded-full hover:bg-[#6c63ff]">
                            Try for Free!
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[700px] m-5 flex items-center justify-center bg-blue-50 rounded-4xl">
                <Image
                    src="./finance.svg"
                    alt="Finance"
                    width="100"
                    height="100"
                    className="object-cover w-2/3 shadow-xl"
                />
            </div>
        </section>
    )
}
export default Hero
