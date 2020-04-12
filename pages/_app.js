import React, { Component } from "react"
import Navbar from "../components/Nabar"
import styled from "styled-components"
import { common_font } from "../config"

const Container = styled.div`
  font-family: ${common_font};
  color: #2d3436;
  width: 100%;
`

export default class extends Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </Container>
    )
  }
}
