import React, { Component } from "react"
import styled from "styled-components"
import TimeSelector from "./TimeSelector"
import { art_font } from "../config"

const Container = styled.div`
  width: 100%;
`

const Time = styled.div`
  width: 100%;
  font-family: ${art_font};
  text-align: center;
  font-size: 2rem;
`

export default class extends Component {
  details = this.props.details
  state = { value: this.details[0].value }
  render() {
    this.details
    return (
      <Container>
        <Time>{this.state.value}'s</Time>
        <TimeSelector
          details={this.details}
          onChange={(value) => this.setState({ value })}
        ></TimeSelector>
      </Container>
    )
  }
}
