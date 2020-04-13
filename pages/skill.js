import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
import { skills } from "../contents/skill"
import SkillRenderer from "../components/SkillRenderer"

export default () => (
  <>
    <Banner
      title='Skill'
      image='/static/forest.jpg'
      menu={["Passion", "Skill"]}
    ></Banner>
    <Paragraph index='0' topic='Passion' is_text background_color='#ffff'>
      Tincidunt vitae semper quis lectus nulla at volutpat diam ut Mattis nunc
      sed blandit libero volutpat sed cras ornare arcuNon curabitur gravida arcu
      ac tortor dignissim convallis aenean et Iaculis urna id volutpat lacus
      laoreet non curabitur gravida arcu Ut porttitor leo a diam sollicitudin
      tempor id eu nisl.
    </Paragraph>
    <Paragraph index='1' topic='Skill'>
      <SkillRenderer skills={skills}></SkillRenderer>
    </Paragraph>
  </>
)
