import React from "react"
import styled from "styled-components"
import Work from "./Work"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
`

export default ({ works }) => (
  <Container>
    {works.map((value, index) => (
      <Work key={index} {...value} is_left={true}></Work>
    ))}
  </Container>
)
