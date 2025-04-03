import React from 'react'
import Image from "next/image";
import {FaArrowRightLong} from "react-icons/fa6";

const Features = () => {
    const features = [
        {
            head: "Intuitive Strategy Builder",
            description: "Create custom trading strategies with an easy-to-use rule builder.",
            image: "/build.svg"
        },
        {
            head: "Real-Time Status Tracking",
            description: "Monitor your strategies from draft to completion with dynamic updates.",
            image: "/track.svg"
        },
        {
            head: "Flexible Workflow",
            description: "Draft strategies or submit them for simulation with a single click.",
            image: "/work.svg"
        },
    ]
    return (
        <section className="py-25 flex items-center justify-center flex-col" id="features">
            <h1 className="text-5xl font-semibold text-black mb-8">Features</h1>
            <p className="text-base opacity-50 mb-8">Best Features in the Market</p>
            <div className="flex gap-8 p-5 items-start justify-center">
                {features.map((feature, i) => (
                    <div key={i} className="p-6 bg-blue-100 rounded-4xl shadow-xl w-1/5 flex flex-col gap-5 h-[550px] overflow-hidden">
                        <div className="flex items-center justify-center h-full bg-blue-50 rounded-4xl">
                            <Image
                                src={feature.image}
                                alt={feature.head}
                                width="100"
                                height="100"
                                className="object-cover w-full text-center"
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-2xl font-bold text-black">{feature.head}</h3>
                            <p className="text-gray-400 text-base">
                                {feature.description}
                            </p>
                            <h1 className="text-base text-blue-500 flex flex-row items-center gap-2 font-semibold cursor-pointer">Learn More <FaArrowRightLong className="mt-0.5"/></h1>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Features
