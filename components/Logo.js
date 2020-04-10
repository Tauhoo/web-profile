import React from "react"
import styled from "styled-components"
import { common_font } from "../config"

const Container = styled.div`
  overflow: hidden;
  width: 124px;
  transition: 0.3s;
  &:hover {
    width: 200px;
    span {
      display: none;
    }
  }
  cursor: pointer;
`

const InnerContainer = styled.div`
  font-family: ${common_font};
  width: 200px;
`

export default () => (
  <Container>
    <InnerContainer>
      Wachirawit W<span>.</span>acharak
    </InnerContainer>
  </Container>
)
