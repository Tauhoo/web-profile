import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
import TimeLine from "../components/TimeLine"

import { timeline_point } from "../contents/timeline"

export default () => (
  <>
    <Banner
      title='About Me'
      image='/static/nebula.jpg'
      menu={["Who's me?", "Time Line", "Works"]}
      onGo={(index) => console.log(index)}
    ></Banner>
    <Paragraph index='0' topic="Who's me ?" is_text>
      I'm ice.
    </Paragraph>
    <Paragraph index='1' topic='Time Line' background_color='#ffff'>
      <TimeLine details={timeline_point}></TimeLine>
    </Paragraph>
  </>
)
