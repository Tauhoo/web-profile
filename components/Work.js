import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ is_left }) =>
    is_left ? "300px 1fr" : "1fr 300px"};
  box-sizing: border-box;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
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
`

const Paragraph = styled.div`
  line-height: 25px;
`

const Button = styled.div`
  height: 40px;
  background-image: linear-gradient(to left, black 0%, #09203f 100%);
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
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ is_left }) => (is_left ? "flex-end" : "flex-start")};
  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`

const Underline = styled.div`
  background-color: black;
  height: 4px;
  border-radius: 2px;
  width: 100%;
  margin: 5px 0px 10px 0px;
`

export default ({ title, detail, link, image, is_left }) => (
  <Container is_left={is_left}>
    {is_left ? <Image src={image}></Image> : null}
    <Content>
      <Title>{title}</Title>
      <Underline></Underline>
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
