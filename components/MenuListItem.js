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

  @media (max-width: 700px) {
    font-size: 48px;
  }
  @media (max-width: 500px) {
    font-size: 36px;
  }
  @media (max-width: 350px) {
    font-size: 28px;
  }

  a {
    text-decoration: none;
    color: white;
  }

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
  border-radius: 1.5px;
`

export default ({ children, onClick }) => (
  <Container onClick={onClick}>
    <ChildContainer>
      {children}
      <Line></Line>
    </ChildContainer>
  </Container>
)
