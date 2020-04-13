import React from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 30px 0px;
  color: white;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  cursor: copy;
`

export default () => (
  <Container>
    <Wrapper>
      <Title>tauhoo_ice@hotmail.com</Title>
      <br></br>
      <Title>wachiwit.w@ku.th</Title>
    </Wrapper>
  </Container>
)
