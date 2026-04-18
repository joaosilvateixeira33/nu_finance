import { createGlobalStyle } from "styled-components";

export const GlobalStye = createGlobalStyle`    
    :root {
        /* Colors */
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secondary: #03B898; 

        --grey-4: #212529;
        --grey-3: #868E96;
        --grey-2: #E9ECEF;
        --grey-1: #F8F9FA;

        --font-title1: bold 38px "Nunito", sans-serif;
        --font-title2: bold 16px "Nunito", sans-serif;
        --font-title3: bold 12px "Nunito", sans-serif;
        --font-title4: 400 12px "Nunito", sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font: var(--font-title4); 
        -webkit-font-smoothing: antialiased;
        background-color: #ffffff;
        color: var(--grey-4);
    }

    button {
        cursor: pointer;
        font-family: "Nunito", sans-serif;
    }

    .container {
        width: 100%;
        max-width: 1200px; 
        margin: 0 auto;    
        padding: 20px;    

        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .container__main {
        width: 100%;
        max-width: 1000px; 
        margin: 0 auto;    
        padding: 20px;     

        display: flex;
        gap: 40px;  
    }
`;