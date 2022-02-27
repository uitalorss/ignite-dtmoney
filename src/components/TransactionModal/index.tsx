import Modal from 'react-modal';
import { Container } from './styles';
import  closeImg  from '../../assets/close.svg';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
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
        <input 
          type="text" 
          placeholder='Categoria'  
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}