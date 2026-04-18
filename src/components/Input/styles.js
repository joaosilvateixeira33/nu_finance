import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px; /* Espaço entre Label, Input e Helper Text */

  label {
    font: var(--font-title4); /* Usando sua fonte de 12px */
    color: var(--grey-4);
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background-color: var(--grey-1); 
    border: 2px solid var(--grey-1); 
    border-radius: 8px;
    font: var(--font-title2); 
    color: var(--grey-4);
    transition: 0.3s ease;

    &::placeholder {
      color: var(--grey-3); 
      font-weight: 400;
    }

    &:focus {
      background-color: #fff;
      border-color: var(--grey-4); 
    }
  }

  p {
    font: var(--font-title4);
    color: var(--grey-3); 
  }
`;