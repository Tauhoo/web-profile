import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
export default () => (
  <>
    <Banner
      title='About Me'
      image='/static/nebula.jpg'
      menu={["Who's me?", "Time Line", "Works"]}
      onGo={(index) => console.log(index)}
    ></Banner>
    <Paragraph index='0' topic="Who's me ?">
      I'm ice.
    </Paragraph>
  </>
)
