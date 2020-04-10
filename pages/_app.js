import React, { Component } from "react"

export default class extends Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}
