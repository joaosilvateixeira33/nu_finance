import { useState } from "react";
import { Header } from "./components/Header";
import { FinanceForm } from "./components/FinanceForm";
import { Total } from "./components/Total";
import { FinanceList } from "./components/FinanceList";
import { GlobalStye } from "./styles/globalStyles";
import { StyledContainer } from "./styles/styledContainer";

function App() {
  const [listTransactions, setListTransactions] = useState([
    {
      id: crypto.randomUUID(),
      description: "Despesa 01",
      value: 550,
      type: "Entrada",
    },
    
    {
      id: crypto.randomUUID(),
      description: "Despesa 02",
      value: 450,
      type: "Despesa",
    }

  ]);

  function addTransaction(newTransaction) {
    const transactionWithId = { ...newTransaction, id: crypto.randomUUID() };
    setListTransactions([...listTransactions, transactionWithId]);
  }

  function removeTransaction(transactionId) {
    const newList = listTransactions.filter((item) => item.id !== transactionId);
    setListTransactions(newList);
  }

  return (
    <>
      <GlobalStye />
      <Header />
      
      <div className="container__main">
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '355px' }}>
          <FinanceForm addTransaction={addTransaction} />
         {listTransactions.length > 0 && <Total listTransactions={listTransactions} />}
        </aside>

        <main style={{ flexGrow: 1 }}>
          <FinanceList 
            listTransactions={listTransactions} 
            removeTransaction={removeTransaction} 
          />
        </main>
      </div>
    </>
  );
}

export default App;