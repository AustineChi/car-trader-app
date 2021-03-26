import styled from "styled-components";

export const Form = styled.form`
    background: #fff;
    padding: 1rem;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%
`;

export const InputArea = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
`;


export const FormField = styled.div`
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin: 10px 0;
    width: 100%;
    border: 0;
    outline: 0;
    padding:  0;
    height: 30px;
    border-bottom: 2px solid #d3d3d3;
    box-shadow: none;
    color: #111;
      &:focus{
        border: 2px solid;
        border-image: linear-gradient(269deg, #00D2FF 0%, #7E51FF 51%, #FA4A84 100%) 0 0 1 0;
      }
      &:valid {
        border: 2px solid;
        border-image: linear-gradient(269deg, #00D2FF 0%, #7E51FF 51%, #FA4A84 100%)  0 0 1 0;
      }
     
`;

export const SelectBox = styled.div`
flex: 1;
 & > select {
        padding: 11px 7px;
        margin: 10px 0;
        width: 100%;
        border: none;
        -webkit-appearance: button;
        appearance: button;
        outline: none;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    }
  
  &:before {
    content: "\f13a";
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  
 &:hover&::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &select option {
    padding: 30px;
  } 
     
`;

export const FormButton = styled.button`
    padding: 0.4rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    outline: none;
    width: 100px;
    border-radius: 100px;
    background: #920dbb;
    color: #fff;
    display: block;
    margin: auto;

`;