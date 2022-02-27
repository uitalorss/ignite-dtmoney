import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionModal } from "./components/TransactionModal";

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
      <TransactionModal
        isOpen={isTransactionModalOpen} //argumento que verifica no componente de transação se o modal está ativo
        onRequestClose={handleCloseTransactionModal} // argumento que passa a função responsável por fechar o modal
      />
      <GlobalStyle />
    </>
  );
}