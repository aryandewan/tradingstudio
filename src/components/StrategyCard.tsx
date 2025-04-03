import { Strategy } from '@/types/strategy';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from "react";

const StrategyCard: React.FC<{ strategy: Strategy }> = ({ strategy }) => (
    <Card className={
        `${
            strategy.status === 'draft'
                ? 'border-yellow-600'
                : strategy.status === 'submitted'
                    ? 'border-blue-600'
                    : 'border-green-600'
        } w-full`
    }>
        <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">{strategy.name}</h3>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-gray-600">
                Status:{' '}
                <span
                    className={
                        strategy.status === 'draft'
                            ? 'text-yellow-600'
                            : strategy.status === 'submitted'
                                ? 'text-blue-600'
                                : 'text-green-600'
                    }
                >
          {strategy.status}
        </span>
            </p>
            <p className="text-sm text-gray-600">
                Created: {new Date(strategy.createdAt).toLocaleDateString()}
            </p>
        </CardContent>
    </Card>
);

export default StrategyCard;