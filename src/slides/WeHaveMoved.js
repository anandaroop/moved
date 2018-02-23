import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
0% {
  opacity: 0;
  transform: translate(0px,0px);
}

50% {
  opacity: 1;
  transform: translate(100px,100px);
}

100% {
  opacity: 0;
  transform: translate(100px,100px);
}
`

const Layout = styled.div`
  position: absolute;
  color: #666;
  z-index: 1;
  animation-name: ${animate};
  animation-duration: 3s;
  /* animation-timing-function: ; */
  /* animation-delay: 0s; */
  /* animation-iteration-count: ; */
  /* animation-direction: normal; */
  animation-fill-mode: forwards;
  /* animation-play-state: ; */
`

class WeHaveMoved extends Component {
  render() {
    return <Layout>WeHaveMoved…</Layout>
  }
}

export { WeHaveMoved }
