import React, { Component } from "react"
import Navbar from "../components/Nabar"
export default class extends Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </>
    )
  }
}
