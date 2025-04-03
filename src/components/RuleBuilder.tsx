'use client';
import React, { useState } from 'react';
import { Rule } from '@/types/strategy';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RuleBuilderProps {
    rules: Rule[];
    onUpdate: (rules: Rule[]) => void;
}

function RuleBuilder({ rules, onUpdate }: RuleBuilderProps) {
    const [newRule, setNewRule] = useState<Rule>({ field: '', operator: '', value: '' });
    const [error, setError] = useState<string | null>(null);

    const fields = [
        'exchange', 'instrument_type', 'price', 'market_capitalisation',
        'price_growth', 'transaction_value', 'trailing_stop loss'
    ];
    const operators = ['=', '>', '<', '>=', '<=', 'among'];

    const addRule = () => {
        if (newRule.field && newRule.operator && newRule.value) {
            onUpdate([...rules, newRule]);
            setNewRule({ field: '', operator: '', value: '' });
            setError(null);
        } else {
            setError('Please fill all fields to add a rule.');
        }
    };

    return (
        <div className="space-y-4 w-full">
            {rules.map((rule, index) => (
                <div key={index} className="text-xl text-gray-700">
                    {rule.conjunction || ''} {rule.field} {rule.operator} {rule.value}
                </div>
            ))}
            <div className="flex gap-4">
                <Select
                    value={newRule.field}
                    onValueChange={(value) => setNewRule({ ...newRule, field: value })}
                >
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Field" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                        {fields.map((f) => (
                            <SelectItem key={f} value={f} className="w-full">{f}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={newRule.operator}
                    onValueChange={(value) => setNewRule({ ...newRule, operator: value })}
                >
                    <SelectTrigger className="w-24">
                        <SelectValue placeholder="Operator" />
                    </SelectTrigger>
                    <SelectContent>
                        {operators.map((o) => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input
                    value={newRule.value}
                    onChange={(e) => setNewRule({ ...newRule, value: e.target.value })}
                    placeholder="Value"
                    className="w-32"
                />
                <Button type="button" onClick={addRule}>Add Rule</Button>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    );
}

export default RuleBuilder;