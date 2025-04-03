import React from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { LuMessagesSquare } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <section id="contact us" className="py-25 flex items-center justify-center flex-col">
            <h1 className="text-5xl font-semibold text-black mb-8">Contact Us</h1>
            <p className="text-base opacity-50 mb-8 text-center">Got any questions? We&#39;re here to help. <br/>
                Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
            </p>
            <div className="flex flex-row w-[70%] items-start justify-center gap-20">
                <div className="flex flex-col w-2/3 gap-5">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <div className="flex flex-col gap-3 w-full" >
                            <Label className="text-xl font-semibold">First name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="p-6 w-full outline-none text-lg"
                                autoComplete={"off"}
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full" >
                            <Label className="text-xl font-semibold">Last name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="p-6 w-full outline-none text-lg"
                                autoComplete={"off"}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5">
                        <Label className="text-xl font-semibold">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete={"off"}
                            className="p-6 w-full outline-none text-lg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5">
                        <Label className="text-xl font-semibold">Phone</Label>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            autoComplete={"off"}
                            className="p-6 w-full outline-none text-lg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5">
                        <Label className="text-xl font-semibold">Message</Label>
                        <Textarea
                            placeholder="Message"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5">
                        <Button className="w-full text-lg p-6">Send A Message</Button>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 gap-15">
                    <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold">Chat with us</h1>
                        <p className="text-base opacity-50 mb-5">
                            Speak to our friendly team in live chat
                        </p>
                        <h1 className="text-lg font-semibold underline cursor-pointer flex flex-row items-center gap-2 mb-2"><LuMessagesSquare className="mt-1"/> Start a live chat</h1>
                        <h1 className="text-lg font-semibold underline cursor-pointer flex flex-row items-center gap-2 mb-2"><IoPaperPlaneOutline className="mt-1"/> Shoot us an email</h1>
                        <h1 className="text-lg font-semibold underline cursor-pointer flex flex-row items-center gap-2 mb-2"><FaXTwitter className="mt-1"/> Message us on X</h1>
                    </div>
                    <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold">Call us</h1>
                        <p className="text-base opacity-50 mb-5">
                            Call our team Mon-Fri from 8am to 5pm
                        </p>
                        <h1 className="text-lg font-semibold underline cursor-pointer flex flex-row items-center gap-2 mb-2">
                            <FaPhoneVolume className="mt-1"/>+1 (555) 123-4567
                        </h1>
                    </div>
                    <div className="flex flex-col w-full">
                        <h1 className="text-xl font-bold">Visit us</h1>
                        <p className="text-base opacity-50 mb-5">
                            Chat to us in person in our San Francisco HQ
                        </p>
                        <h1 className="text-lg font-semibold underline cursor-pointer flex flex-row items-center gap-2 mb-2">
                            <IoLocationOutline className="mt-1"/>123 Market Street, Suite 400, San Francisco
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
