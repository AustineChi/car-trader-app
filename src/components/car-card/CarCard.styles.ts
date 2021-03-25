import styled from "styled-components";

export const Car = styled.div`
    padding: 10px;
    width: 270px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.45);
    transition:box-shadow 0.4s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.65);
    }
}
`;

export const CarImage = styled.img`
    width: 100%;
    height: 200px;
}
`;

export const CarName = styled.div`
    padding: 10px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
}

`;