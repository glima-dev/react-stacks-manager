import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .filedsetSelect{
        width: 100%;
        display: flex;
        flex-direction: column;
        border: none;
        
        span{
            color: red;
            font-size: var(--caption);
            margin-top: 2px;
            display: block;
            height: 13px;
        }
    }

    .labelSelect{
        font-size: var(--caption);
        color: var(--grey-0);
        margin-bottom: 12px
    }

    select{
        height: 38.5px;
        width: 100%;
        background-color: var(--grey-2);
        border-radius: 4px;
        border: none;
        color: var(--grey-0);
        padding-left: 13px;
        font-size: var(--body);
        font-weight: 400;
        cursor: pointer;

        &:focus{
            outline-color: var(--grey-0);
        }

        @media (min-width: 450px) {
            height: 48px;
        }
    }
`

export const StyledWraper = styled.div`
    margin: 0;    

    span{
        color: red;
        font-size: var(--caption);
        margin-top: 2px;
        display: block;
        height: 13px;
    }
`

