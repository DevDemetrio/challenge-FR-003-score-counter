import styled from "styled-components";


interface ContainerProps {
  backgroundColor: string;
}

export const DivContainer = styled.div<ContainerProps>`
    
    width: 158px;
    height: 224px;
    background-color: ${(props) => props.backgroundColor};
`