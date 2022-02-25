import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

export function App() {
  //criando o estado que vai controlar o modal
  const [isTransactionModalOpen, setIstransactionModalOpen] = useState(false);

  //funções para manipular o modal (abrir/fechar)
  function handleOpenTransactionModal() {
    setIstransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
    setIstransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} /*Argumento que recebe a função que abre o modal, que o componente Header vai receber como prop*//>
      <Dashboard />
      <Modal 
      isOpen={isTransactionModalOpen} //argumento que verifica o estado do modal
      onRequestClose={handleCloseTransactionModal} //Argumento que recebe como parâmetro a função que fecha o modal
      >
        <h2>Tô aqui!!</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}