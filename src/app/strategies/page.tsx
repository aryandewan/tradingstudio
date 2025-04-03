'use client';
import { useState, useEffect } from 'react';
import { Strategy } from '@/types/strategy';
import StrategyCard from '@/components/StrategyCard';
import CreateStrategyPage from "@/components/CreateStrategy";

export default function HomePage() {
    const [strategies, setStrategies] = useState<Strategy[]>([]);

    useEffect(() => {
        const loadStrategies = () => {
            const savedStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
            setStrategies(savedStrategies);
        };

        loadStrategies(); // Initial load
        const interval = setInterval(loadStrategies, 1000); // Poll every second for updates

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleStrategySaved = (strategy: Strategy) => {
        setStrategies((prev) => [...prev, strategy]);
    };

    return (
        <section className="flex flex-row gap-10 m-5">
            <CreateStrategyPage onStrategySaved={handleStrategySaved}/>
            <div className="w-1/2 py-8 shadow-xl rounded-4xl p-5 bg-white">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Strategies</h2>
                    {strategies.length === 0 ? (
                        <p className="text-gray-600">
                            No strategies yet. Create a new Strategy to get started!
                        </p>
                    ) : (
                        <div className="grid grid-cols-4 grid-rows-4 gap-4">
                                {strategies.map((strategy) => (
                                    <StrategyCard key={strategy.id} strategy={strategy} />
                                ))}
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
}