import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center; 
    justify-content: space-evenly;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    padding: 20px;
    
    h1 {
        font: var(--font-title1);

        span {
            color: var(--color-primary);
        }
    }

`;