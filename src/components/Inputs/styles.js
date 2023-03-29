import styled from "styled-components";

export const Styledfieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;

    label{
        font-size: var(--caption);
        color: var(--grey-0);
        margin-bottom: 12px;
    }

    input {
        height: 38.5px;
        width: 100%;
        background-color: var(--grey-2);
        border-radius: 4px;
        border: none;
        color: var(--grey-0);
        padding-left: 13px;
        font-size: var(--body);
        font-weight: 400;

        &::placeholder{
            color: var(--grey-1);
        }

        &:focus{
            outline-color: var(--grey-0);
        }

        @media (min-width: 450px) {
            height: 48px;
        }
    }
`
