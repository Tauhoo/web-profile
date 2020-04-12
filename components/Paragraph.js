import React, { Component } from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"
import Title from "./Title"

const Container = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  padding: 50px 0px 20px 0px;
`

const Paragraph = styled.div`
  word-break: break-word;
`

export default class extends Component {
  render() {
    const { index, topic, children } = this.props
    return (
      <Container>
        <Wrapper>
          <Title index={index}>{topic}</Title>
          <br></br>
          <Paragraph>{children}</Paragraph>
        </Wrapper>
      </Container>
    )
  }
}
