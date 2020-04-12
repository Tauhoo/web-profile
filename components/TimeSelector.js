import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 40px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const MainLine = styled.div`
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #c4c4c4;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

const Circle = styled.div`
  ${({ clickable }) => (clickable ? `cursor: pointer;` : "")}
  position: absolute;
  height: ${({ diameter }) => diameter};
  width: ${({ diameter }) => diameter};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: ${({ background_color }) => background_color};
  z-index: 10;
  transition: 0.3s;
`
const SelectorCircle = styled.div`
  position: absolute;
  height: ${({ diameter }) => diameter};
  width: ${({ diameter }) => diameter};
  border-radius: 50%;
  transform: translate(-50%, -50%)
    scale(${({ selected }) => (selected ? 1 : 0)});
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border-style: solid;
  border-color: #c0392b;
  z-index: 10;
  transition: 0.3s;
`

const TimeLinePoint = ({ crop_details, step, onChange }) =>
  crop_details.map(({ value, percent }, index) => [
    <SelectorCircle
      diameter='35px'
      top='50%'
      left={`${percent}%`}
      selected={step === index + 1}
    ></SelectorCircle>,
    <Circle
      clickable
      key={index}
      diameter='20px'
      top='50%'
      left={`${percent}%`}
      background_color={index + 1 === step ? "#c0392b" : "#C4C4C4"}
      onClick={() => onChange(value, index + 1)}
    ></Circle>,
  ])

export default class extends Component {
  state = { step: 0 }
  details = this.props.details || []

  onChange = (value, index) => {
    this.setState({ step: index }, () =>
      this.props.onChange ? this.props.onChange(value, index) : null
    )
  }

  render() {
    const { step } = this.state
    const last_num = this.details.length - 1
    const crop_details = this.details.slice(1, this.details.length - 1)
    return (
      <Container>
        <Wrapper>
          <Circle
            clickable
            diameter='30px'
            top='50%'
            left='0px'
            background_color={0 === step ? "#c0392b" : "#C4C4C4"}
            onClick={() => this.onChange(this.details[0].value, 0)}
          ></Circle>
          <Circle
            clickable
            diameter='30px'
            top='50%'
            left='100%'
            background_color={
              this.details.length - 1 === step ? "#c0392b" : "#C4C4C4"
            }
            onClick={() =>
              this.onChange(this.details[last_num].value, last_num)
            }
          ></Circle>
          <TimeLinePoint
            crop_details={crop_details}
            step={step}
            onChange={this.onChange}
          ></TimeLinePoint>
          <MainLine></MainLine>
        </Wrapper>
      </Container>
    )
  }
}
