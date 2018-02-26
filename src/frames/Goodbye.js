import React from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
`

const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  animation-name: ${animate};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const Goodbye = ({ duration }) => <Layout duration={duration}>g2b</Layout>

export { Goodbye }
