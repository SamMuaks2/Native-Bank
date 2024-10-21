export interface ExpenseType {
    id: string;
    name: string;
    amount: string;
    percentage: string;
}

export interface IncomeType {
    id: string;
    name: string;
    amount: string;
}

export interface SpendingType {
    id: string;
    name: string;
    amount: string;
    date: string;
}

export interface TransactionsType {
    id: string;
    type: string;
    amount: string;
    date: string;
},