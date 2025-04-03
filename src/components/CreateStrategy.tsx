import StrategyForm from '@/components/StrategyForm';
import {Strategy, StrategyStep} from '@/types/strategy';

export default function CreateStrategyPage({onStrategySaved}:{onStrategySaved:(strategy: {
        id: string;
        name: string;
        scanner: StrategyStep;
        buy: StrategyStep;
        sell: StrategyStep;
        simulation: StrategyStep;
        status: string;
        createdAt: string
    }) => void}) {

    const handleSave = (strategy: {
        id: string;
        name: string;
        scanner: StrategyStep;
        buy: StrategyStep;
        sell: StrategyStep;
        simulation: StrategyStep;
        status: string;
        createdAt: string
    }) => {
        const existingStrategies = JSON.parse(localStorage.getItem('strategies') || '[]');
        localStorage.setItem('strategies', JSON.stringify([...existingStrategies, strategy]));
        onStrategySaved(strategy);
    };

    return (
        <div className="w-1/2 mx-auto bg-white py-8 shadow-xl rounded-4xl p-5">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Strategy Builder</h1>
            <StrategyForm onSave={handleSave} />
        </div>
    );
}