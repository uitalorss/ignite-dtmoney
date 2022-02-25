import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

export function App() {
  const [isTransactionModalOpen, setIstransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIstransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
    setIstransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <Modal 
      isOpen={isTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}>
        <h2>Desgraça!!</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}