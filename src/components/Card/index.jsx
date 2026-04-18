import { StyledCard } from "./styles";
import { Button } from "../Button";

export const Card = ({ transaction, removeTransaction }) => {
  return (
    <StyledCard $type={transaction.type}>
      <div className="card-left">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>

      <div className="card-right">
        <p>
          {transaction.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button 
          buttonStyle="grey" 
          style={{ height: '22px', fontSize: '10px' }}
          onClick={() => removeTransaction(transaction.id)}
        >
          Excluir
        </Button>
      </div>
    </StyledCard>
  );
};