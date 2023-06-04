import styled from "styled-components";

export const Container = styled.div`
  background-color: #0007;
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
`;

export const MaxMin = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.1em;
`;

export const Temp = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  gap: 10px;

  #temp {
    font-size: 3.1em;
    font-weight: bolder;
    line-height: 1em;
  }

  #description::first-letter {
    text-transform: uppercase;
  }
`;

export const Feels = styled.div`
  font-size: 1.1em;
  padding-top: 10px;
`;

