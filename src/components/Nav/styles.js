import styled from "styled-components";

export const StyledNav = styled.nav`   
    width: 100%;
    height: 74px;
    border-bottom: 2px solid var(--grey-3);

    div{
        height: 100%;
        width: 92%;
        max-width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        
        img{
            width: 130px;
        }

        button{            
            width: 60px;
            height: 32px;
        }        
    }
`