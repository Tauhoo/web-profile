import React from "react"
import styled from "styled-components"
import SkillProgress from "./SkillProgress"
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export default ({ skills }) => (
  <Container>
    {skills.map((props, key) => (
      <SkillProgress {...props} key={key}></SkillProgress>
    ))}
  </Container>
)
