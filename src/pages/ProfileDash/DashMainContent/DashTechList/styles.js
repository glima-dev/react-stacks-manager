import styled from "styled-components";

export const StyledTechList = styled.ul`
    width: 100%;
    height: max-content;
    min-height: 260px;
    background-color: var(--grey-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 22px 9px;

    @media (min-width: 450px) {
            padding: 22px 22px;
        }

    li{
        background-color: var(--grey-4);
        width: 100%;
        height: 49px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        @media (min-width: 450px) {
            padding: 0 22px;
        }

        h3{
            color: var(--grey-0);
            font-size: var(--title-3);
            font-weight: 700;
        }

        p{
            color: var(--grey-1);
            font-size: var(--caption);
            font-weight: 400;
        }

        &:hover {
            background-color: var(--grey-2);

            h3{
            color: var(--color-white);
            }

            p{
                color: var(--grey-0);
            }
        }
    }
`

