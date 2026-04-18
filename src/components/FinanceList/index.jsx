import { Card } from "../Card";
import { StyledList } from "./styles";

export const FinanceList = ({ listTransactions, removeTransaction }) => {
  return (
    <section>
      <h3>Resumo financeiro</h3>
      
      {listTransactions.length > 0 ? (
        <StyledList>
          {listTransactions.map((transaction, index) => (
            <Card 
              key={index} 
              transaction={transaction} 
              removeTransaction={removeTransaction} 
            />
          ))}
        </StyledList>
      ) : (
        <p style={{ marginTop: '30px' }}>Você ainda não possui nenhum lançamento</p>
      )}
    </section>
  );
};