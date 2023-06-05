import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(255 255 255 / 80%);
  color: black;
  padding: 30px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: #00000075 0px 3px 5px 0px;

`;

export const Region = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-size: 1.5em;
  gap: 10px;
`;

export const IconTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  img {
    background-color: #728195;
    border-radius: 50%;
  }
`;

export const MaxMin = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.1em;
  z-index: 10;
  position: absolute;
`;

export const Temp = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  gap: 10px;

  #temp {
    font-size: 3.1em;
    font-weight: bolder;
    padding-top: 10px;
  }

  #description::first-letter {
    text-transform: uppercase;
  }
`;

export const Feels = styled.div`
  font-size: 1.1em;
`;

