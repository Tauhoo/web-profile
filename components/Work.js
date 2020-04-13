import React from "react"
import styled from "styled-components"
import { art_font } from "../config"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ is_left }) =>
    is_left ? "300px 1fr" : "1fr 300px"};
  color: white;
  padding: 20px 0px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled.img`
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`

const Content = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
`

const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-family: ${art_font};
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  border-color: white;
`

const Paragraph = styled.div`
  line-height: 25px;
`

const Button = styled.div`
  height: 40px;
  background-color: white;
  border-radius: 20px;
  padding: 0px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;
  * {
    color: #2d3436;
    text-decoration: none;
  }
`

const LinkContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ is_left }) => (is_left ? "flex-end" : "flex-start")};
  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`

export default ({ title, detail, link, image, is_left }) => (
  <Container is_left={is_left}>
    {is_left ? <Image src={image}></Image> : null}
    <Content>
      <Title>{title}</Title>
      <br></br>
      <Paragraph>{detail}</Paragraph>
      {link ? (
        <LinkContainer is_left={is_left}>
          <Button>
            <a href={link.url} target='_blank'>
              {link.name}
            </a>
          </Button>
        </LinkContainer>
      ) : null}
    </Content>
    {is_left ? null : <Image src={image}></Image>}
  </Container>
)
