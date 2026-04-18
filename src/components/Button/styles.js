import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  font: var(--font-title2); /* 16px bold */
  transition: 0.3s;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  height: 48px;

  ${(props) =>
    props.$buttonSize === "lg" &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$buttonStyle === "primary" &&
    css`
      background-color: var(--color-primary);
      color: white;
      &:hover {
        background-color: var(--color-primary-2);
      }
    `}

  ${(props) =>
    props.$buttonStyle === "grey" &&
    css`
      background-color: var(--grey-2);
      color: var(--grey-3);
      &:hover {
        background-color: var(--grey-3);
        color: var(--grey-1);
      }
    `}
`;