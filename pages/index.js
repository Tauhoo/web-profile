import React from "react"
import Banner from "../components/Banner"
export default () => (
  <>
    <Banner
      title='About Me'
      image='/static/nebula.jpg'
      menu={["Who's me?", "Time Line", "Works"]}
      onGo={(index) => console.log(index)}
    ></Banner>
  </>
)
