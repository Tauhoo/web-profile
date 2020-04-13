import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import Logo from "./Logo"
import Burger from "./Burger"
import MenuListItem from "./MenuListItem"

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  color: white;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  background-color: ${({ visible, menu_active }) =>
    visible && !menu_active ? "black" : "transparent"};
`
const MenuList = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: ${({ active }) => (active ? "0px" : "-100vh")};
  z-index: 998;
  transition: 0.3s;
  background: linear-gradient(270deg, #5e49ff, #ff5a5a);
  padding: 100px 0px;
  box-sizing: border-box;
`

const MenuWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`
export default class extends Component {
  state = { menu_active: false, visible: false }

  update_visible_position = 3

  onScroll = () => {
    const top = document.documentElement.scrollTop
    const { visible } = this.state
    if (top <= this.update_visible_position && visible) {
      this.setState({ visible: false })
    } else if (top > this.update_visible_position && !visible) {
      this.setState({ visible: true })
    }
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    if (typeof window === "undefined") return
    window.removeEventListener("scroll", this.onScroll)
  }

  render() {
    const { menu_active, visible } = this.state
    return (
      <>
        <Container visible={visible} menu_active={menu_active}>
          <Logo></Logo>
          <Burger
            active={menu_active}
            onClick={() => this.setState({ menu_active: !menu_active })}
          ></Burger>
        </Container>
        <MenuList active={menu_active}>
          <MenuWrapper>
            <MenuListItem>About Me</MenuListItem>
            <MenuListItem>Skill</MenuListItem>
            <MenuListItem>Blog</MenuListItem>
          </MenuWrapper>
        </MenuList>
      </>
    )
  }
}
