/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 4px;
    transition: .4s; 

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "default":
                return css`
                    padding: 0 1rem;
                    height: 38.5px;
                    width: 100%;
                    font-size: var(--headline);
                    font-weight: 500;

                    @media (min-width: 450px) {
                        height: 48px;
                    }
                `
            case "medium":
                return css`
                    padding: 0 1.3rem;
                    width: 80px;
                    height: 32px;
                    font-size: var(--body);
                    font-weight: 600;

                    @media (min-width: 450px) {
                        height: 40px;
                        width: 68px;
                    }

                `
            case "small":
                return css`                    
                    width: 33px;
                    height: 32px;
                    font-size: var(--body);
                    font-weight: 600;
                `
        }
    }}

    ${({ buttonStyle }) => {
        switch (buttonStyle) {
            case "primary":
                return css`
                    background: var(--color-primary);
                    color: var(--color-white);

                    &:hover{
                        background: var(--color-primary-focus);
                    }
                `
            case "disable":
                return css`
                    background: var(--color-primary-disable);
                    color: var(--color-white);

                    &:hover{
                        background: var(--color-primary-disable);
                        color: var(--color-white);
                        filter: brightness(80%);
                    }
                `
            case "grayDefault":
                return css`
                    background: var(--grey-3);
                    color: var(--color-white);

                    &:hover{
                        background-color: var(--grey-1);
                        color: var(--color-white);
                    }
                `
            case "grayLight":
                return css`
                    background: var(--grey-1);
                    color: var(--color-white);

                    &:hover{
                        filter: brightness(70%);
                    }
                `
        }
    }}    

`