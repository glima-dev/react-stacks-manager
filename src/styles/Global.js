import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: 'Inter', sans-serif;
    }

    :disabled{
        filter: brightness(78%);
    }

    :root{
    --color-primary: #FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-disable:#59323F;
    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2:#343B41;
    --grey-3:#212529;
    --grey-4:#121214;
    --grey-4-50:#12121450;
    --color-white: #fff;
    --sucess:#3FE864;
    --negative:#E83F5B;

    --title-0: 1.5rem;
    --title-1: 1.125rem;
    --title-2: 1rem;
    --title-3: 0.875rem;
    --headline: 1rem;
    --body: 0.875rem;
    --caption: 0.75rem;

        @media (min-width: 450px) {
            --title-0: calc(1.5rem * 1.1);
            --title-1: calc(1.125rem * 1.1);
            --title-2: calc(1rem * 1.1);
            --title-3: calc(0.875rem * 1.1);
            --headline: calc(1rem * 1.1);
            --body: calc(0.875rem * 1.1);
            --caption: calc(0.75rem * 1.1);
        }
    }
`;
