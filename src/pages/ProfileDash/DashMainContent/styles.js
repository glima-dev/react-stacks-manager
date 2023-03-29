import styled from "styled-components";
import addIcon from "../../../assets/add.svg"

export const StyledMainContent = styled.main`
    max-height: max-content;
    min-height: 300px;
    width: 92%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 8px auto 0;
    padding-bottom: 32px;
`

export const StyledMainHeader = styled.header`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: var(--title-2);
        font-weight: 600; 
        color: var(--grey-0);
    }

    button{
        background-image: url(${addIcon});
        background-repeat: no-repeat;
        background-position: center;   
        background-size: 42%;     
    }
`

