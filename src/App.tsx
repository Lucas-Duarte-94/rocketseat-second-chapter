import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

    function handleOpenModal() {
        setIsNewTransactionModal(true);
    }

    function handleCloseModal() {
        setIsNewTransactionModal(false);
    }
    
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModal} onRequestClose={handleCloseModal} />

      <GlobalStyle />
    </div>
  );
}

export default App;
