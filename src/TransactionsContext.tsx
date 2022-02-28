import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';
interface Transaction {
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  createdAt: string
}

//criando uma nova interface, com base na interface Transaction, mas tirando o id e o createdAt para usar na função de criar transaction
type TransactionIput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionIput) => Promise<void>;
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const[transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transactionInput: TransactionIput) {
    const response = await api.post('/transactions', {
      ...transactionInput, createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions, transaction
    ]);
  }
  
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}