import React, { Component } from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"
import Title from "./Title"

const Container = styled.div`
  width: 100%;
  background: ${({ background_color }) => background_color || "#f6f8f8"};
  padding: 50px 0px 50px 0px;
`

const Paragraph = styled.div`
  word-break: break-word;
  ${({ color }) => `color: ${color};`}
  line-height: 25px;
`

export default class extends Component {
  render() {
    const {
      index,
      topic,
      children,
      is_text,
      background_color,
      num_color,
      title_color,
      text_color,
    } = this.props
    return (
      <Container background_color={background_color}>
        <Wrapper>
          <Title index={index} num_color={num_color} color={title_color}>
            {topic}
          </Title>
          <br></br>
          {is_text ? (
            <Paragraph color={text_color}>{children}</Paragraph>
          ) : (
            children
          )}
        </Wrapper>
      </Container>
    )
  }
}
