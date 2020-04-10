import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  color: white;
  padding: 30px 40px;
  box-sizing: border-box;
`

export default () => (
  <Container>
    <Logo></Logo>
  </Container>
)
