import React from "react"
import styled from "styled-components"
import {
  primary_color,
  secondary_color,
  art_font,
  common_font,
} from "../config"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({ z_index }) => z_index};
  background-color: ${({ background_color }) => background_color};
`

const Background = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 50%;
  background-color: ${secondary_color || "transparent"};
  @media (max-width: 800px) {
    width: 50%;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Title = styled.div`
  font-family: ${art_font};
  font-size: 144px;
  margin-top: 250px;
  text-align: center;
  color: white;
  @media (max-width: 800px) {
    font-size: 98px;
  }
  @media (max-width: 600px) {
    font-size: 72px;
  }
  @media (max-width: 400px) {
    font-size: 48px;
  }
`

const Menu = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 75%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (max-width: 800px) {
    top: 60%;
  }
`
const Item = styled.div`
  font-family: ${common_font};
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 25%;
  height: 5px;
  background-color: white;
  display: inline-block;
  @media (max-width: 800px) {
    height: 2px;
  }
  @media (max-width: 600px) {
    height: 1px;
  }
`

const TextItem = styled.span`
  font-size: 2rem;
  color: white;
  margin-left: 20px;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export default ({ title, menu }) => (
  <Container>
    <Layer z_index={0}>
      <Content>
        <Title>{title}</Title>
        <Menu>
          {menu.map(({ name, callback }) => (
            <Item>
              <Line></Line>
              <TextItem>{name}</TextItem>
            </Item>
          ))}
        </Menu>
      </Content>
    </Layer>
    <Layer z_index={-1} background_color={primary_color}>
      <Background></Background>
    </Layer>
  </Container>
)
