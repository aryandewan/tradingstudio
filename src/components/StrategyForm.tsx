'use client';
import React, { useState } from 'react';
import {Strategy, StrategyStep} from '@/types/strategy';
import RuleBuilder from './RuleBuilder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const StrategyForm: React.FC<{ onSave: (strategy: Strategy) => void }> = ({ onSave }) => {
    const initialStrategy: Strategy = {
        id: Date.now().toString(),
        name: '',
        scanner: { rules: [] },
        buy: { rules: [] },
        sell: { rules: [] },
        simulation: { rules: [] },
        status: 'draft',
        createdAt: new Date().toISOString(),
    };
    const [strategy, setStrategy] = useState<Strategy>(initialStrategy);
    const [error, setError] = useState<string | null>(null);
    const [scanClicked, setScanClicked] = useState<boolean>(false);
    const [buyClicked, setBuyClicked] = useState<boolean>(false);
    const [simulationClicked, setSimulationClicked] = useState<boolean>(false);
    const [sellClicked, setSellClicked] = useState<boolean>(false);

    const handleScanClicked = () => setScanClicked(true);
    const handleBuyClicked = () => setBuyClicked(true);
    const handleSellClicked = () => setSellClicked(true);
    const handleSimulationClicked = () => setSimulationClicked(true);

    const isStrategyValid = (strat: Strategy): boolean => {
        const hasName = strat.name.trim() !== '';
        const hasRules =
            (scanClicked && strat.scanner.rules.length > 0) ||
            (buyClicked && strat.buy.rules.length > 0) ||
            (sellClicked && strat.sell.rules.length > 0) ||
            (simulationClicked && strat.simulation.rules.length > 0);
        const anySectionClicked = scanClicked || buyClicked || sellClicked || simulationClicked;
        return hasName && (!anySectionClicked || hasRules);
    };

    const handleSubmitAction = (formData: FormData) => {
        const updatedStrategy = {
            ...strategy,
            name: formData.get('name') as string,
            status: 'submitted' as const,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        };

        if (!isStrategyValid(updatedStrategy)) {
            setError('Please provide a strategy name and at least one rule.');
            return;
        }
        setError(null);
        onSave(updatedStrategy);

        setTimeout(() => {
            const completedStrategy = { ...updatedStrategy, status: 'completed' };
            const existingStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
            const updatedStrategies = existingStrategies.map((s: Strategy) =>
                s.id === completedStrategy.id ? completedStrategy : s
            );
            localStorage.setItem('strategies', JSON.stringify(updatedStrategies));
        }, 5000);

        setStrategy(initialStrategy);
        setScanClicked(false);
        setBuyClicked(false);
        setSellClicked(false);
        setSimulationClicked(false);
    };

    return (
        <form action={handleSubmitAction} className="space-y-6 w-full">
            <Input
                name="name"
                value={strategy.name}
                onChange={(e) => setStrategy({ ...strategy, name: e.target.value })}
                placeholder="Strategy Name"
                className="w-full"
                required={true}
            />

            <div className="p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Scan Trigger Conditions</h3>
                {!scanClicked ? (
                    <h1 className="text-blue-500 cursor-pointer" onClick={handleScanClicked}>+ Add Scan Condition</h1>
                ) : (
                    <RuleBuilder
                        rules={strategy.scanner.rules}
                        onUpdate={(rules) => setStrategy({ ...strategy, scanner: { rules } })}
                    />
                )
                }
            </div>

            <div className="bg-blue-50 p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Buy Trigger Conditions</h3>
                {!buyClicked ? (
                    <h1 className="text-blue-500 cursor-pointer" onClick={handleBuyClicked}>+ Add Buy Condition</h1>
                ) : (
                    <RuleBuilder
                        rules={strategy.buy.rules}
                        onUpdate={(rules) => setStrategy({ ...strategy, buy: { rules } })}
                    />
                )
                }
            </div>

            <div className="p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sell Trigger Conditions</h3>
                {!sellClicked ? (
                    <h1 className="text-blue-500 cursor-pointer" onClick={handleSellClicked}>+ Add Sell Condition</h1>
                ) : (
                    <RuleBuilder
                        rules={strategy.sell.rules}
                        onUpdate={(rules) => setStrategy({ ...strategy, sell: { rules } })}
                    />
                )}
            </div>

            <div className="bg-blue-50 p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Simulation Trigger Conditions</h3>
                {!simulationClicked ? (
                    <h1 className="text-blue-500 cursor-pointer" onClick={handleSimulationClicked}>+ Add Simulation Condition</h1>
                ) : (
                    <RuleBuilder
                        rules={strategy.simulation.rules}
                        onUpdate={(rules) => setStrategy({ ...strategy, simulation: { rules } })}
                    />
                )}
            </div>

            {error && (
                <p className="text-red-600 text-sm">{error}</p>
            )}

            <div className="flex gap-4 flex-row w-full justify-end">
                <Button type="submit" className="w-1/5">
                    Save Strategy
                </Button>
            </div>
        </form>
    );
};

export default StrategyForm;