import { FormEvent, useState } from 'react';

import Modal from 'react-modal';
import { RadioBox, Container, TransactionTypeContainer, ButtonModal } from './styles';
import closeImg from '../../assets/close.svg';
import expenseImg from '../../assets/expense.svg';
import incomeImg from '../../assets/income.svg';
import { api } from '../../services/api';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
  const [title, setTitle] = useState(''); // criando o estado para guardar o valor Titulo
  const [value, setValue] = useState(0); // criando o estado para guardar o valor
  const [transactionType, setTransactionType] = useState(''); // criando o estado para guardar o valor da transação
  const [category, setCategory] = useState(''); // criando o estado para guardar o valor categoria

  //função que cuida do envio dos dados para a api.
  function handleNewTransaction(event: FormEvent){
    event.preventDefault();
    const data = {
      title, value, transactionType, category
    };
    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen} //argumento que verifica o estado do modal
      onRequestClose={onRequestClose} //Argumento que recebe como parâmetro a função que fecha o modal
      overlayClassName="react-modal-overlay"
      className='react-modal-content'
    >
      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="icone-fechar-modal" />
      </button>
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder='Título'
          value={title} //valor que aponta para a sua respectiva variável no estado.
          onChange={event => setTitle(event.target.value)} //valor que atribui a variável um novo valor a cada mudança de estado.
        />
        <input
          type="number"
          placeholder='Valor'
          value={value} //valor que aponta para a sua respectiva variável no estado.
          onChange={event => setValue(Number(event.target.value))} //valor que atribui a variável um novo valor a cada mudança de estado
        />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setTransactionType('income')} //atribuindo o valor referido para a transição
            isActive={transactionType === 'income'} //Essa propriedade criada retorna um boolean verificando se o atributo transactionType é igual ao valor desejado. 
            activeColor="green" // Essa propriedade atribui um nome para a cor do botao.
          >
            <img src={incomeImg} alt="icone-entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setTransactionType('expense')} //atribuindo o valor referido para a transição
            isActive={transactionType === 'expense'} //Essa propriedade criada retorna um boolean verificando se o atributo transactionType é igual ao valor desejado.
            activeColor="red" // Essa propriedade atribui um nome para a cor do botao.
          >
            <img src={expenseImg} alt="icone-saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder='Categoria'
          value={category} //valor que aponta para a sua respectiva variável no estado.
          onChange={event => setCategory(event.target.value)} //valor que atribui a variável um novo valor a cada mudança de estado
        />
        <ButtonModal
          type="submit"

        >
          Cadastrar
        </ButtonModal>
      </Container>
    </Modal>
  )
}