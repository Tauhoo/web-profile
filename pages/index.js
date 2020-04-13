import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
import TimeLine from "../components/TimeLine"
import WorksRenderer from "../components/WorksRenderer"

import { timeline_point } from "../contents/timeline"
import { works } from "../contents/works"

export default () => (
  <>
    <Banner
      title='About Me'
      image='/static/nebula.jpg'
      menu={["Who's me?", "Time Line", "Works"]}
      onGo={(index) => console.log(index)}
    ></Banner>
    <Paragraph index='0' topic="Who's me ?" is_text>
      Tincidunt vitae semper quis lectus nulla at volutpat diam ut Mattis nunc
      sed blandit libero volutpat sed cras ornare arcuNon curabitur gravida arcu
      ac tortor dignissim convallis aenean et Iaculis urna id volutpat lacus
      laoreet non curabitur gravida arcu Ut porttitor leo a diam sollicitudin
      tempor id eu nisl.
    </Paragraph>
    <Paragraph index='1' topic='Time Line' background_color='#ffff'>
      <TimeLine details={timeline_point}></TimeLine>
    </Paragraph>
    <Paragraph
      index='2'
      topic='Time Line'
      background_color='#850000'
      num_color='#2F3640'
      title_color='white'
    >
      <WorksRenderer works={works}></WorksRenderer>
    </Paragraph>
  </>
)
