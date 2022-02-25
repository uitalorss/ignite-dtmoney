import Modal from 'react-modal';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
  return (
    <Modal 
    isOpen={isOpen} //argumento que verifica o estado do modal
    onRequestClose={onRequestClose} //Argumento que recebe como parâmetro a função que fecha o modal
    >
      <h2>Tô aqui!!</h2>
    </Modal>
  )
}