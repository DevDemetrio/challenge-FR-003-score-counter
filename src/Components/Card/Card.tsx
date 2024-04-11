import React from 'react';
import {DivContainer} from './styles'
import styled from "styled-components";


interface DivProps {
  backgroundColor: string;
}

const DivBola = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Div: React.FC<DivProps> = ({
  backgroundColor,

}) => (
  <DivContainer backgroundColor={backgroundColor}>
      <DivBola><span>100</span></DivBola>
  </DivContainer>
)

export default Div