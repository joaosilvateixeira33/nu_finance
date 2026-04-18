import { StyledTotalCard } from "./styles";

// No seu componente Total.jsx
export const Total = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce((acc, transaction) => {
    return transaction.type === "Entrada"
      ? acc + Number(transaction.value) 
      : acc - Number(transaction.value);
  }, 0);

  const formattedTotal = totalValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledTotalCard>
      <div className="total-header">
        <h3>Valor total:</h3>
        <span className="total-value">
          {formattedTotal}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </StyledTotalCard>
  );
};