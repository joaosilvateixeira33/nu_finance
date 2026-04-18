import styled from "styled-components";

export const StyledTotalCard = styled.div`
  width: 100%;
  max-width: 355px;
  padding: 20px;
  border: 1px solid var(--grey-2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .total-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font: var(--font-title2); /* 16px bold */
    color: var(--grey-4);
  }

  .total-value {
    font: var(--font-title2);
    color: var(--color-primary); /* Rosa do seu print */
  }

  p {
    font: var(--font-title4); /* 12px regular */
    color: var(--grey-3);
  }
`;