import React from "react"
import Banner from "../components/Banner"
import Paragraph from "../components/Paragraph"
import BlogCardContainer from "../components/BlogCardContainer"
import { blogs } from "../contents/blogs"

export default () => (
  <>
    <Banner
      title='Blog'
      image='/static/galaxy.jpg'
      menu={["What's it ?", "Topics"]}
    ></Banner>
    <Paragraph index='0' topic="What's it" is_text>
      Tincidunt vitae semper quis lectus nulla at volutpat diam ut Mattis nunc
      sed blandit libero volutpat sed cras ornare arcuNon curabitur gravida arcu
      ac tortor dignissim convallis aenean et Iaculis urna id volutpat lacus
      laoreet non curabitur gravida arcu Ut porttitor leo a diam sollicitudin
      tempor id eu nisl.
    </Paragraph>
    <Paragraph index='1' topic='Topics' background_color='#fff'>
      <BlogCardContainer blogs={blogs}></BlogCardContainer>
    </Paragraph>
  </>
)
