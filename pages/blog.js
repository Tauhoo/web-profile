import React from "react"
import Banner from "../components/Banner"
export default () => (
  <>
    <Banner
      title='Skill'
      image='/static/galaxy.jpg'
      menu={[{ name: "What's it ?" }, { name: "Topics" }]}
    ></Banner>
  </>
)
