export interface Rule {
    field: string;
    operator: string;
    value: string | number;
    conjunction?: 'AND' | 'OR';
    children?: Rule[];
}

export interface StrategyStep {
    rules: Rule[];
}

export interface Strategy {
    id: string;
    name: string;
    scanner: StrategyStep;
    buy: StrategyStep;
    sell: StrategyStep;
    simulation: StrategyStep;
    status: 'draft' | 'submitted' | 'completed';
    createdAt: string;
}