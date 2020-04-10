import React from "react"
import Banner from "../components/Banner"
export default () => (
  <>
    <Banner
      title='About Me'
      image='/static/nebula.jpg'
      menu={[{ name: "Who's me?" }, { name: "Time Line" }, { name: "Works" }]}
    ></Banner>
  </>
)
