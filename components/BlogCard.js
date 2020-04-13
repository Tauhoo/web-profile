import React from "react"
import styled from "styled-components"
import { tags_conversion } from "../contents/blogs"
import moment from "moment"

const Container = styled.div`
  background-image: linear-gradient(
    80deg,
    #dad4ec 0%,
    #dad4ec 1%,
    #f3e7e9 100%
  );
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  transition: 0.3s;
`

const Badge = styled.div`
  height: 24px;
  line-height: 24px;
  background-color: ${({ background_color }) => background_color};
  padding: 0px 10px;
  display: inline-block;
  font-size: 0.7rem;
  vertical-align: middle;
  border-radius: 12px;
  margin: 0px 10px;
  color: white;
`

const Title = styled.div`
  width: 100%;
  color: #09203f;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  grid-gap: 10px;
`

const TitleText = styled.div`
  font-size: 1.2rem;
  display: inline-block;
`

const Paragrah = styled.div`
  width: 100%;
  color: #09203f;
  word-break: break-word;
  line-height: 25px;
`

const Underline = styled.div`
  height: 2px;
  border-radius: 1px;
  width: 100%;
  background-color: #09203f;
  margin: 10px 0px 15px 0px;
`

const Time = styled.div`
  color: gray;
  font-size: 0.8rem;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  position: relative;
  width: 100%;
`

export default ({ title, detail, tags, link, timestamp }) => (
  <Container>
    <LinkWrapper href={link.url} target='_blank'>
      <Title>
        <TitleText>{title}</TitleText>
        <Time>{moment(new Date(timestamp)).fromNow()}</Time>
        <div>
          {tags.map((value, index) => (
            <Badge background_color={tags_conversion[value]} key={index}>
              {value}
            </Badge>
          ))}
        </div>
      </Title>
      <Underline></Underline>
      <Paragrah>{detail}</Paragrah>
    </LinkWrapper>
  </Container>
)
