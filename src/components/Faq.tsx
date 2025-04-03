import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <section id="faq" className="flex items-center justify-center flex-col py-25">
            <h1 className="text-5xl font-semibold text-black mb-8">FAQ</h1>
            <p className="text-base opacity-50 mb-8">Your questions, Our answers!</p>
            <div className="flex w-[50%]">
                <Accordion type="single" collapsible className="w-full mb-5">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-3xl font-bold">What is Trading Studio?</AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Trading Studio is a platform that lets you design, test, and track custom trading strategies using historical data—all from your browser.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-3xl font-bold">Do I need coding skills to use it?</AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Not at all! Our intuitive rule builder makes strategy creation simple for everyone.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-3xl font-bold">How are strategies simulated?</AccordionTrigger>
                        <AccordionContent className="text-xl">
                            For this demo, simulations are mimicked client-side with a delay. In a full version, we’d connect to real market data!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-3xl font-bold">Is my data safe?</AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Since this is a frontend-only app, everything stays on your device via local storage—no servers involved.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-3xl font-bold">Can I share my strategies?</AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Not yet, but future updates could add export/import features—stay tuned!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
export default Faq
