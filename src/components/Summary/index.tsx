import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/expense.svg";
import totalImg from "../../assets/total.svg";


export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="foto-exemplo-lucro" />
        </header>
        <strong>R$ 1000,00</strong>

      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImg} alt="foto-exemplo-gasto" />
        </header>
        <strong>- R$ 500,00</strong>

      </div>
      <div className="card-total">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="foto-exemplo-total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}