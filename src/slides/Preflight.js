import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
0% {
  opacity: 1;
}

100% {
  opacity: 0;
}
`

const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  color: gray;
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

class Preflight extends Component {
  render() {
    return <Layout>Preflight…</Layout>
  }
}

export { Preflight }
