import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';


function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

    function handleOpenModal() {
        setIsNewTransactionModal(true);
    }

    function handleCloseModal() {
        setIsNewTransactionModal(false);
    }
    
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModal} onRequestClose={handleCloseModal} />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
