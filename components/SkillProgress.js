import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 10px;
  align-items: center;
`

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  height: max-content;
`

const TitleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
`

const Title = styled.div`
  font-size: 1.2rem;
  span {
    font-size: 1rem;
    color: #c0c5ca;
    margin-left: 10px;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 7.5px;
  overflow: hidden;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);
`

const Bar = styled.div`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  border-radius: 10px;
`

const Percent = styled.div`
  font-size: 1.2rem;
  span {
    font-size: 1rem;
  }
`

export default ({ name, image, percent, time }) => (
  <Container>
    <Image image={image}></Image>
    <Content>
      <TitleContainer>
        <Title>
          {name}
          <span>{time}</span>
        </Title>
        <div>
          <Percent>
            {percent} <span>%</span>
          </Percent>
        </div>
      </TitleContainer>
      <div>
        <ProgressBar>
          <Bar percent={percent}></Bar>
        </ProgressBar>
      </div>
    </Content>
  </Container>
)
