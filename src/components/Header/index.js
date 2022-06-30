import React from 'react'
import * as C from "./styles";
import Img from "../images/logo.png"

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>  <img src={Img}  width={700}/>    </C.Title>
      </C.Header>
    </C.Container>
    
  )
}

export default Header;
