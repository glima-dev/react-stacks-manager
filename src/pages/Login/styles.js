import styled from "styled-components";

export const StyledMainLogin = styled.main`   
    width: 92%;
    max-width: 369px;
    height: max-content;
    min-height: 600px;
    display: flex;    
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px 0;

    img{
        width: 140px;
        margin-bottom: 26px;

        @media (min-width: 450px) {
            width: 150px;
            margin-bottom: 36px;
        }
    }

    section{
        background-color: var(--grey-3);
        width: 100%;
        min-height: 490px;
        height: max-content;
        display: flex;    
        align-items: center;        
        flex-direction: column;
        padding: 32px 16px;
        border-radius: 4px;

        @media (min-width: 450px) {
                min-height: 540px;
                height: max-content;
        }

        h2{
            font-size: var(--title-0);
            font-weight: 700;
            color: var(--grey-0);
            margin: 16px 0 24px;
        }

        p{
            font-size: var(--caption);
            font-weight: 600;
            color: var(--grey-1);
            margin: 48px 0 24px;
        }

        a{
            display: block;
            width: 100%;
            height: 38.5px;
            background-color: var(--grey-1);
            text-align: center;
            padding-top: 8px;
            border-radius: 4px;
            font-size: var(--headline);
            font-weight: 500;
            color: var(--grey-0);

            @media (min-width: 450px) {
                height: 48px;
                padding-top: 12px;
            }

            &:hover{
                background-color: var(--grey-2)
            }            
        }
    }
`


