import React, { Component } from "react"
import styled from "styled-components"
import TimeSelector from "./TimeSelector"
import TimeLineContent from "./TimeLineContent"
import { art_font } from "../config"

const Container = styled.div`
  width: 100%;
`

const Time = styled.div`
  width: 100%;
  font-family: ${art_font};
  text-align: center;
  font-size: 3rem;
`

export default class extends Component {
  details = this.props.details
  state = { value: this.details[0].value, index: 0 }
  render() {
    const { value, index } = this.state
    return (
      <Container>
        <Time>{value}'s</Time>
        <br />
        <TimeLineContent
          contents={this.details[index].contents}
        ></TimeLineContent>
        <br />
        <br />
        <TimeSelector
          details={this.details}
          onChange={(value, index) => this.setState({ value, index })}
        ></TimeSelector>
      </Container>
    )
  }
}
