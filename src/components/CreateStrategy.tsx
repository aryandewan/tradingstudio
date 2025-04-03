import StrategyForm from '@/components/StrategyForm';
import { Strategy } from '@/types/strategy';

export default function CreateStrategyPage({onStrategySaved}:{onStrategySaved:(strategy: Strategy) => void}) {

    const handleSave = (strategy: Strategy) => {
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