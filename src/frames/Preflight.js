import React from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% { opacity: 1; }
 75% { opacity: 1; }
100% { opacity: 0; }
`

const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: white;

  animation-name: ${animate};
  animation-duration: ${props => `${props.animationDuration / 1000}s`};
  /* animation-timing-function: ; */
  /* animation-delay: 0s; */
  /* animation-iteration-count: ; */
  /* animation-direction: normal; */
  /* animation-fill-mode: forwards; */
  /* animation-play-state: ; */
`

const animateRoop = keyframes`
  0% { opacity: 0; }
 15% { opacity: 1; }
100% { opacity: 1; }
`

const Roop = styled.span`
  animation-name: ${animateRoop};
  animation-duration: 4s;
`

const animateLinta = keyframes`
   0% { opacity: 0; }
  15% { opacity: 0; }
  30% { opacity: 1; }
 100% { opacity: 1; }
 `

const Linta = styled.span`
  animation-name: ${animateLinta};
  animation-duration: 4s;
`

const animateLeela = keyframes`
   0% { opacity: 0; }
  30% { opacity: 0; }
  45% { opacity: 1; }
 100% { opacity: 1; }
 `

const Leela = styled.span`
  animation-name: ${animateLeela};
  animation-duration: 4s;
`

const animateMoved = keyframes`
   0% { opacity: 0; }
  45% { opacity: 0; }
  60% { opacity: 1; }
 100% { opacity: 1; }
 `

const Moved = styled.span`
  animation-name: ${animateMoved};
  animation-duration: 4s;
`

const Preflight = ({ animationDuration }) => (
  <Layout animationDuration={animationDuration}>
    <Roop>A</Roop> <Linta>and B</Linta> <Leela>and C</Leela>{' '}
    <Moved>and D</Moved>
  </Layout>
)

export { Preflight }
