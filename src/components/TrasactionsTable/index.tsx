import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface TransactionsProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createAt: string;
}

export function TrasactionsTable() {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
        api('/transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat().format(new Date(transaction.createAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}