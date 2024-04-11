import React from 'react'
import GlobalStyled from './Components/Header/GlobalStyles'
import Header from './Components/Header/Header'
import Div from './Components/Card/Card'


function App() {

  return (
    <div>
      <GlobalStyled />
      <Header />
      <Div backgroundColor="#7159c1"/>
      <Div backgroundColor="#c16559"/>
    </div>
  )
}

export default App
