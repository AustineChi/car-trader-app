import styled from "styled-components";


export const Container = styled.div`
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        margin-bottom: 100px
`;


export const Title = styled.h2`
    color: #202124;
    background-color: #f1f3f4;
	padding: 10px;
	width: 200px;
	text-align: center;
	margin: 30px auto;
	font-weight: 700;
    font-size: 16px;
    border-radius: 100px;
    box-sizing: border-box;
    `
export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const SubHeader = styled.h3`
      color: #202124;
      background-color: #f1f3f4;
      padding: 10px;
      width: 200px;
      text-align: center;
      margin: 30px auto 0 auto;
      font-weight: 700;
      font-size: 14px;
      border-radius: 100px;
      box-sizing: border-box;
    `

export const Text = styled.p`
	padding: 0 7px;
	font-size: 13px;
	
`;