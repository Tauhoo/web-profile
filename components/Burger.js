import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  div {
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.1);
  }
`

const Line = styled.div`
  background-color: white;
  opacity: ${({ opacity }) => opacity || 1};
  width: ${({ width }) => width || "100%"};
  height: 3px;
  border-radius: 1.5px;
  transform: rotate(${({ rotate }) => rotate || 0}deg) translate(-50%, -50%);
  top: ${({ top }) => top || "0px"};
  left: ${({ left }) => left || "0px"};
  transform-origin: top left;
  position: absolute;
`

const Circle = styled.div`
  width: ${({ diameter }) => diameter || "100%"};
  height: ${({ diameter }) => diameter || "100%"};
  border-radius: 50%;
  border-style: solid;
  border-color: white;
  position: absolute;
  border-width: ${({ active }) => (active ? "3px" : "0px")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`

export default ({ active, onClick }) => (
  <Container onClick={onClick}>
    <Line
      top={active ? "50%" : "0px"}
      left='50%'
      width={active ? "80%" : "100%"}
      rotate={active ? -225 : 0}
    ></Line>
    <Line
      top='50%'
      left='50%'
      width={active ? "0px" : "100%"}
      opacity={active ? 0 : 1}
    ></Line>
    <Line
      top={active ? "50%" : "100%"}
      left='50%'
      width={active ? "80%" : "100%"}
      rotate={active ? 225 : 0}
    ></Line>
    <Circle diameter={active ? "100%" : "0px"} active={active}></Circle>
  </Container>
)
