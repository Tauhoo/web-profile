import React from "react"
import styled from "styled-components"

const IndexContainer = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ num_color }) => num_color || "#c0392b"};
  width: 25px;
  height: 25px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const Title = styled.div`
  font-size: 1.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: max-content 1fr;
  grid-gap: 10px;
  word-break: break-word;
  span {
    font-weight: bold;
    ${({ color }) => (color ? `color: ${color};` : "")}
  }
`
export default ({ index, children, color, num_color }) => (
  <Title>
    <IndexContainer num_color={num_color}>{index}</IndexContainer>
    <span color={color}>{children}</span>
  </Title>
)
