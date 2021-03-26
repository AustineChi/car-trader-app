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
    & div {
        display: block;
        padding: 20px 0;
        white-space: nowrap;
        cursor: pointer;
        position: relative
    }
    `
export const StyledLink = styled.a`
    padding: 10px 15px;
    font-size: 13px;
    font-weight: bold;
    border-bottom:  ${({ active }) =>  active? '2px solid #4285f4' : ''};
`;

export const Title = styled.h2`
    color: #ff0;
    background-color: #4285f4;
    padding: 10px 20px;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
    border-radius: 100px;
`;

export const NoOfItemsOnCart = styled.span`
  position: absolute;
  right: 0px;
  top: 12px;
  color: white;
  background-color: #4285f4;
  width: 18px;
  height: 18px;
  padding: 4px;
  font-size: 10px;
  border-radius: 50%;
  font-weight: 700;

`;