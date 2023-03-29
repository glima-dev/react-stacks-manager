import styled from "styled-components";

export const StyledModal = styled.div`   
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;    
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: var(--grey-4-50);
`

export const ModalBox = styled.div`
    width: 93%;
    max-width: 370px;
    height: 280px;
    background-color: limegreen;
    border-radius: 6px;

    @media (min-width: 450px) {
        height: 320px;
    }

    header{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--grey-2);
        padding: 9px 16px;
        border-radius: 4px 4px 0 0;

        @media (min-width: 450px) {
            height: 50px;
            padding: 12px 20px;
        }

        h3{
            font-size: var(--body);
            font-weight: 700;
            color: var(--grey-0);
        }

        button{
            font-family: 'nunito', sans-serif;
            font-size: var(--headline);
            color: var(--grey-1);
            font-weight: 600;

            &:hover{
                color: var(--grey-0);
            }
        }        
    }

    section{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 18px 30px;
        background-color: var(--grey-3);

        @media (min-width: 450px) {
            padding: 24px 22px 24px;
        }
    }
`