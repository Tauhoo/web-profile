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
  height: 500px;
  position: relative;
  @media (max-width: 700px) {
    height: 350px;
  }
`

const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({ z_index }) => z_index};
  ${({ image }) => (image ? `background: url(${image});` : "")}
  background-size: cover;
  background-color: ${({ background_color }) => background_color};
`

const Background = styled.div`
  width: 500px;
  height: 100%;
  margin-left: 50%;
  background-color: ${secondary_color || "transparent"};
  ${({ image }) => (image ? `background: url(${image});` : "")}
  background-size: cover;
  filter: hue-rotate(120deg);
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 1000px) {
    width: 300px;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
`

const Content = styled.div`
  width: max-content;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70px);
`

const Title = styled.div`
  font-family: ${art_font};
  font-size: 98px;
  color: white;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 72px;
  }
`

const Menu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`
const TextItem = styled.div`
  font-family: ${common_font};
  font-size: 1rem;
  color: white;
  width: max-content;
  cursor: pointer;
  span {
    transition: 0.3s;
    opacity: 0;
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
`

export default ({ title, menu, image, onGo }) => (
  <Container>
    <Layer z_index={0}>
      <Content>
        <Title>{title}</Title>
        <Menu>
          {menu.map((name, index) => (
            <TextItem key={index} onClick={onGo ? () => onGo(index) : null}>
              <span>{"{ "}</span>
              {name}
              <span>{" }"}</span>
            </TextItem>
          ))}
        </Menu>
      </Content>
    </Layer>
    <Layer z_index={-1} background_color={primary_color} image={image}>
      <Background image={image}></Background>
    </Layer>
  </Container>
)
