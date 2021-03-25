import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
`;

export const HeaderLeftSection = styled.div`
        justify-content: flex-start;
        min-width: 30%;
        order: 1;
        display: flex;
        flex-wrap: wrap;

`
export const HeaderRightSection = styled.div`
    justify-content: flex-end;
    min-width: 30%;
    order: 2;
    display: flex;
    flex-wrap: wrap;
    && div {
        display: block;
        padding: 15px;
        white-space: nowrap;
    }
    `

export const Title = styled.h2`
    color: #ff0;
    background-color: #4285f4;
    padding: 10px 20px;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    border-radius: 100px;
`;