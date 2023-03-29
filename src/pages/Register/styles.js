import styled from "styled-components";

export const StyledMainRegister = styled.main`   
    width: 92%;
    max-width: 369px;
    height: max-content;
    display: flex;    
    justify-content: center;
    flex-direction: column;
    margin: 50px 0;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        
        img{
            width: 120px;

            @media (min-width: 450px) {
                width: 130px;
            }
        }

        a{
            display: block;
            height: 32px;
            width: 80px;
            background-color: var(--grey-3);
            text-align: center;
            padding-top: 8px;
            border-radius: 4px;
            font-size: var(--caption);
            font-weight: 600;
            color: var(--grey-0);

            &:hover{
                background-color: var(--grey-1);
            }
            
            @media (min-width: 450px) {
                width: 76px;
                height: 40px;
                padding-top: 12px;
            }
        }   
    }

    section{
        background-color: var(--grey-3);
        width: 100%;
        height: max-content;
        display: flex;    
        align-items: center;        
        flex-direction: column;
        padding: 32px 16px;
        border-radius: 4px;

        h2{
            font-size: var(--title-0);
            font-weight: 700;
            color: var(--grey-0);
            margin: 16px 0 28px;
        }

        p{
            font-size: var(--caption);
            font-weight: 400;
            color: var(--grey-1);
            margin-bottom: 24px;            
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
                background-color: var(--grey-2);
            }            
        }
    }
`