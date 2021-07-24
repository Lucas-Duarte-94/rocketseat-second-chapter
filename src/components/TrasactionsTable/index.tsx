import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";

import DeleteImg from '../../assets/garbage-interface-svgrepo-com.svg';
import { api } from "../../services/api";

export function TrasactionsTable() {
    const { transactions } = useTransactions();
    
    async function handleDeleteTransaction() {
        // not working yet.
        await api.delete('/transaction/:id')
    }

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
                                <td>
                                    <button onClick={handleDeleteTransaction}>
                                        <img src={DeleteImg} alt="Deletar" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}