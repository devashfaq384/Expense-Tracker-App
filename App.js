import './App.css';
import Expense from './components/Expense';
import { TransactionProvider } from './components/trContext';

function App() {
  return (
    <TransactionProvider>
      <div>
        <Expense />
      </div>
    </TransactionProvider>
  );
}

export default App;
