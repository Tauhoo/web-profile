import React from "react"
import Banner from "../components/Banner"
export default () => (
  <>
    <Banner
      title='About Me'
      menu={[{ name: "Who's me?" }, { name: "Time Line" }, { name: "Works" }]}
    ></Banner>
  </>
)
