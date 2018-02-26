import React from 'react'
import styled, { keyframes } from 'styled-components'

const delayedFadeOut = keyframes`
  0% { opacity: 1; }
 80% { opacity: 1; }
100% { opacity: 0; }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: white;
  color: #666;

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: ${delayedFadeOut};
  animation-duration: ${props => `${props.duration / 1000}s`};
  animation-fill-mode: forwards;
`

const Type = styled.div`
  position: absolute;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-size: 12vh;
  line-height: 120%;
  font-weight: 200;

  animation-name: ${delayedFadeOut};
  animation-duration: ${props => `${props.duration / 1000}s`};
  animation-fill-mode: forwards;
`

const animateRoop = keyframes`
  0% { opacity: 0; }
 15% { opacity: 1; }
100% { opacity: 1; }
`

const Roop = styled.div`
  animation-name: ${animateRoop};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateLinta = keyframes`
   0% { opacity: 0; }
  15% { opacity: 0; transform: translate(0px, -1vh)}
  30% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Linta = styled.div`
  animation-name: ${animateLinta};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateLeela = keyframes`
   0% { opacity: 0; }
  30% { opacity: 0; transform: translate(0px, -1vh)}
  45% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Leela = styled.div`
  animation-name: ${animateLeela};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateMoved = keyframes`
   0% { opacity: 0; }
  50% { opacity: 0; }
  70% { opacity: 1; }
 100% { opacity: 1; }
 `

const Moved = styled.div`
  color: red;
  animation-name: ${animateMoved};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const Preflight = ({ duration }) => (
  <Overlay duration={duration}>
    <Type duration={duration}>
      <Roop duration={duration}>Roop</Roop>
      <Linta duration={duration}>and Linta</Linta>
      <Leela duration={duration}>and Leela have </Leela>
      <Moved duration={duration}>moved</Moved>
    </Type>
  </Overlay>
)

export { Preflight }
