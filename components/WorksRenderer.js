import React from "react"
import styled from "styled-components"
import Work from "./Work"

const Container = styled.div`
  width: 100%;
`

export default ({ works }) => (
  <Container>
    {works.map((value, index) => (
      <Work key={index} {...value} is_left={index % 2 === 0}></Work>
    ))}
  </Container>
)
