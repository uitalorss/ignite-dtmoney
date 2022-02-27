import Modal from 'react-modal';
import { RadioBox, Container, TransactionTypeContainer, ButtonModal } from './styles';
import closeImg from '../../assets/close.svg';
import expenseImg from '../../assets/expense.svg';
import incomeImg from '../../assets/income.svg';
import { useState } from 'react';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
  const [transactionType, setTransactionType] = useState(''); // criando o estado para guardar o valor da transação

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
      <Container>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder='Título'
        />
        <input
          type="number"
          placeholder='Valor'
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
            activeColor="red"
          >
            <img src={expenseImg} alt="icone-saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder='Categoria'
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