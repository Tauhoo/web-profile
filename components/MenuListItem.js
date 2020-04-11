import React from "react"
import styled from "styled-components"
import { art_font } from "../config"

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-family: ${art_font};
  position: relative;
`

const ChildContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 72px;
  cursor: pointer;
  &:hover {
    div {
      width: 100%;
    }
  }
`

const Line = styled.div`
  width: 0px;
  position: absolute;
  height: 3px;
  background-color: white;
  transition: 0.3s;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`

export default ({ children }) => (
  <Container>
    <ChildContainer>
      {children}
      <Line></Line>
    </ChildContainer>
  </Container>
)
