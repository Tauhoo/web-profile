import React from "react"
import styled from "styled-components"
import { art_font } from "../config"

const Container = styled.div`
  min-height: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const ContentContainer = styled.div`
  background-color: #d63031;
  width: 100%;
  height: max-content;
  padding-bottom: 20px;
`

const Title = styled.div`
  background-color: #9f4343;
  font-family: ${art_font};
  font-size: 1.2rem;
  width: 100%;
  color: white;
  padding: 20px;
  box-sizing: border-box;
`

const Paragraph = styled.div`
  width: 100%;
  padding: 20px 20px 0px 20px;
  color: white;
  box-sizing: border-box;
  word-break: break-word;
  line-height: 25px;
`

const Button = styled.div`
  height: 40px;
  background-color: black;
  border-radius: 20px;
  padding: 0px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;
  * {
    color: white;
    text-decoration: none;
  }
`

const LinkContainer = styled.div`
  width: 100%;
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`

const Image = styled.img`
  width: 100%;
`

const ImageContainer = styled.div`
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
`

export default ({ contents }) => {
  if (contents === undefined) return null
  return (
    <Container>
      {contents.map(({ title, content, link, image }) => {
        return (
          <ContentContainer>
            <Title>{title}</Title>
            <Paragraph>{content}</Paragraph>
            {link ? (
              <LinkContainer>
                <Button>
                  <a href={link.url} target='_blank'>
                    {link.name}
                  </a>
                </Button>
              </LinkContainer>
            ) : null}
            {image ? (
              <ImageContainer>
                <Image src={image}></Image>
              </ImageContainer>
            ) : null}
          </ContentContainer>
        )
      })}
    </Container>
  )
}
