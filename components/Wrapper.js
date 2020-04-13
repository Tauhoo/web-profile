import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 0px 40px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`

export default ({ children }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
)
