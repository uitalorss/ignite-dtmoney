import { Container } from "./styles";

export function Transactions() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 2.000,00</td>
            <td>Freela</td>
            <td>28/02/2022</td>
          </tr>
          <tr>
            <td>Ida ao Shopping</td>
            <td>-R$ 150,00</td>
            <td>Saída</td>
            <td>17/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td>R$ 800,00</td>
            <td>Despesa de casa</td>
            <td>05/02/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td>R$ 2.500,00</td>
            <td>Venda</td>
            <td>01/02/2022</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}