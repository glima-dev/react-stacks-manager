import styled from "styled-components";

export const StyledHeader = styled.header`   
    width: 100%;
    height: 131px;
    border-bottom: 2px solid var(--grey-3);

    div{
        height: 100%;
        width: 92%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        margin: 0 auto;

        @media (min-width: 450px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    
        h1{
            font-size: var(--title-1);
            color: var(--grey-0);
            font-weight: 700;
        }

        p{
            font-size: var(--caption);
            color: var(--grey-1);
            font-weight: 400; 
        }
    }
`