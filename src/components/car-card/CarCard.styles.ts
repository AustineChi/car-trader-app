import styled from "styled-components";

export const Car = styled.div`
    padding: 10px;
    width: 250px;
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
    object-fit: cover;
    &:hover {
        object-fit: contain;
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

export const Button = styled.button`
    padding: 0.4rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    outline: none;
    width: 100px;
    border-radius: 100px;
    background: #000;
    color: #fff;
    display: block;
    width: 100%;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
    }
    &:active {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(4px);
    }
`;

export const CarDetails = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    box-sizing: border-box;
}

`;