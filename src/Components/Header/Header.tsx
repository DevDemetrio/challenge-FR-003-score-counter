import { styled } from "styled-components"

const HeaderBackground = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 2.437rem;
`
const HeaderDivContainerblue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3300FF;
`
const HeaderDivContainerRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF0000;
`
const SpanText = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #FFFFFF;

  @media (min-width: 600px) {
    font-size: 1.875rem;
  }
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