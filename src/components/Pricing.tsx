"use client"

import React, {useState} from 'react'
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import {CiCircleCheck} from "react-icons/ci";

const Pricing = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitch = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <section id="pricing" className="min-h-dvh flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
                    <div className="text-5xl font-semibold text-center flex flex-row gap-2">
                        Pricing
                    </div>
                    <p className="text-[0.6rem] md:text-base opacity-50">
                        Choose the plan that&#39;s right for you. No hidden fees, no surprises.
                    </p>
                    <div
                        className="flex flex-row items-center justify-center gap-2"
                    >
                        <Label
                            className={`text-base md:text-3xl ${isChecked ? "opacity-30" : "opacity-100"}`}
                        >
                            Monthly
                        </Label>
                        <Switch onCheckedChange={handleSwitch} />
                        <Label
                            className={`text-base md:text-3xl ${isChecked ? "opacity-100" : "opacity-30"}`}
                        >
                            Yearly
                        </Label>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:flex md:grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-10 xl:w-[60%] w-[80%] md:w-[90%] h-full">
                    <div className="flex flex-col gap-4 p-5 xl:p-10 rounded-4xl bg-blue-100 shadow-xl xl:w-1/3 w-full h-full items-start justify-start base-card">
                        <h1 className="text-2xl opacity-50">Base</h1>
                        <h1 className="text-5xl font-bold">FREE</h1>
                        <p className="text-sm opacity-50">
                            For personal use and small projects
                        </p>
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">1 active collaboration room</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Basic syntax highlighting</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">30-minute session limit/day</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Limited drawing board tools</p>
                                </li>
                            </ul>
                        </div>
                        <button className="text-gray-700 p-4 rounded-lg w-full mt-4 text-base xl:text-xl border-2 border-gray-700 hover:bg-white hover:border-white hover:text-black transition-all duration-300">
                            Selected Plan
                        </button>
                    </div>
                    <div className="flex flex-col md:col-span-2 md:w-1/2 md:mx-auto xl:mx-0 gap-4 p-5 md:p-10 rounded-4xl text-black bg-blue-100 shadow-xl xl:w-1/3 w-full h-full items-start justify-start premium-card">
                        <div className="flex flex-row md:flex-col xl:flex-row items-start justify-between w-full gap-3">
                            <h1 className="text-2xl">Premium</h1>
                            <div className="text-black p-1 rounded-full border-1 border-black">
                                <h1 className="text-[8px] md:text-sm font-bold">
                                    MOST POPULAR
                                </h1>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold">
                            {isChecked ? "$100" : "$10"}
                            <span className="text-sm opacity-50">
                {isChecked ? "/year" : "/month"}
              </span>
                        </h1>
                        <p className="text-sm opacity-50">For teams & professionals</p>
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Unlimited collaboration rooms</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Advanced auto-formatting</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Unlimited drawing board usage</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Customizable themes</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Priority support</p>
                                </li>
                            </ul>
                        </div>
                        <button className="bg-white text-black p-4 rounded-lg w-full mt-4 text-base xl:text-xl hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out">
                            Upgrade to Premium
                        </button>
                    </div>
                    <div className="flex flex-col md:col-start-2 md:row-start-1 gap-4 p-5 md:p-10 rounded-4xl text-black bg-blue-100 shadow-xl xl:w-1/3 w-full h-full items-start justify-start enterprise-card">
                        <h1 className="text-2xl opacity-50">Enterprise</h1>
                        <h1 className="text-5xl font-bold">
                            {isChecked ? "$250" : "$25"}
                            <span className="text-sm opacity-50">
                {isChecked ? "/year" : "/month"}
              </span>
                        </h1>
                        <p className="text-sm opacity-50">For large teams & enterprises</p>
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Everything in Pro +</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Dedicated servers</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">Team role management</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiCircleCheck className="w-5 h-5" />
                                    <p className="md:text-sm">API access for integrations</p>
                                </li>
                            </ul>
                        </div>
                        <button className="bg-white text-black p-4 rounded-lg w-full mt-4 text-base xl:text-xl hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out">
                            Upgrade to Enterprise
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pricing
