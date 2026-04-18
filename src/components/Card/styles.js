import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  background-color: var(--grey-1);
  padding: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  
  /* Borda dinâmica baseada na prop $type */
  border-left: 4px solid ${props => 
    props.$type === "Entrada" ? "var(--color-secondary)" : "var(--grey-2)"};

  .card-left {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font: var(--font-title3);
      color: var(--grey-4);
    }

    span {
      font: var(--font-title4);
      color: var(--grey-3);
    }
  }

  .card-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    p {
      font: var(--font-title4);
      color: var(--grey-4);
    }
  }
`;