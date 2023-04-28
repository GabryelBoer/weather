import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #787878;
    padding: 0 10px;
    font-size: 1.3em;
    outline: 0;
    background-color: transparent;
    text-align: center;
    color: white;
    border-radius: 20px 0px 0px 20px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #787878;
    padding-right: 5px;
    background-color: #525252;
    border-left: 0px;
    color: #fff;
    border-radius: 0px 20px 20px 0px;
    font-size: 25px;
    width: 80px;
    cursor: pointer;
    height: 50px;
  }
`;
