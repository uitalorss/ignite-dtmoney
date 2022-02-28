import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/expense.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";


export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  const totalIncomes = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income'){
      return acc += transaction.value;
    }
    return acc;
  }, 0);

  const totalExpenses = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'expense'){
      return acc += transaction.value;
    }
    return acc;
  }, 0)

  const total = totalIncomes - totalExpenses;

  console.log(transactions)
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="foto-exemplo-lucro" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalIncomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImg} alt="foto-exemplo-gasto" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalExpenses)}
        </strong>
      </div>
      <div className="card-total">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="foto-exemplo-total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </strong>
      </div>
    </Container>
  )
}