import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Transactions() {
  interface Transactions {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    createdAt: string
  }
  const[transactions, setTransactions] = useState<Transactions[]>([])
  
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  })

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.value)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-br').format(
                  new Date(transaction.createdAt)
                )}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}