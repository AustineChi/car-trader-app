import styled from "styled-components";

export const Wrapper = styled.div`
        width: 700px;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
`;



export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    height: auto;
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.45);
    // text-align: center;
`;

export const InternalWrapper = styled.div`
    width: 100%;
    height: ${(props) => (props.open ? '70px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;

`;

export const ItemTitle = styled.div`
padding: 10px;
width: 100%;
font-size: 14px;
font-weight: 700;
box-sizing: border-box;
cursor: pointer;
}

`;

export const Text  = styled.p`
border-top: 1px solid #333;
font-size: 13px;
padding: 20px;

`;
