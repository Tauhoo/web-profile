import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

export default ({ blogs }) => (
  <Container>
    {blogs.map((props, index) => (
      <BlogCard {...props} key={index}></BlogCard>
    ))}
  </Container>
)
