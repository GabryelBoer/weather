import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255 255 255 / 80%);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: #00000075 0px 3px 5px 0px;
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #787878;
    padding: 0 10px;
    font-size: 1.3em;
    outline: 0;
    background-color: transparent;
    text-align: center;
    color: black;
    border-radius: 10px 0px 0px 10px;
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
    border-radius: 0px 10px 10px 0px;
    font-size: 25px;
    width: 80px;
    cursor: pointer;
    height: 50px;
  }
`;
