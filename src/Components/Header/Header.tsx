import { styled } from "styled-components"

const HeaderBackground = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
`
const HeaderDivContainerblue = styled.div`
  background-color: #3300FF;

`
const HeaderDivContainerRed = styled.div`
  background-color: #FF0000;
`
const SpanText = styled.span`
  display: block;
  color: #FFFFFF;
  font-weight: 600;
`
const Header = () =>{
  return(
   <HeaderBackground>
      <HeaderDivContainerblue>
          <SpanText>Gamer</SpanText>
      </HeaderDivContainerblue>
      <HeaderDivContainerRed>
        <SpanText>Placar</SpanText>
      </HeaderDivContainerRed>
   </HeaderBackground>
  )
}

export default Header