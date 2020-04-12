import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
import TimeLine from "../components/TimeLine"

const timeline = [
  { value: 198, percent: 0 },
  { value: 1998, percent: 10 },
  { value: 1999, percent: 20 },
  { value: 2000, percent: 30 },
  { value: 2001, percent: 40 },
  { value: 2001, percent: 50 },
  { value: 1998, percent: 60 },
  { value: 1998, percent: 70 },
  { value: 1998, percent: 80 },
  { value: 1998, percent: 90 },
  { value: 1999, percent: 100 },
]

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
      <TimeLine details={timeline}></TimeLine>
    </Paragraph>
  </>
)
