import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface TransactionsProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionInput {
    title: string;
    type: string;
    category: string;
    amount: number;
}

interface TransactionsContextData {
    transactions: TransactionsProps[];
    createTransaction: (transection: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
    
    useEffect(() => {
        api('/transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createAt: new Date()});
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}