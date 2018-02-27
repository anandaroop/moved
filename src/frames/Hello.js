import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% { opacity: 0; transform: translate(0, -5em); }
 40% { opacity: 0; }
 50% { opacity: 1; transform: translate(0, 0em); }  
 95% { opacity: 1; }
100% { opacity: 0; }
`

const Movement = styled.div`
  position: absolute;
  bottom: 5em;
  right: 5em;

  animation-name: ${slideIn};
  animation-duration: ${props => `${props.duration / 1000}s`};
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

const Type = styled.div`
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-size: 5em;
  line-height: 120%;
  font-weight: 200;
`

const animateHi = keyframes`
  0% { opacity: 0; }
 30% { opacity: 0; }
 40% { opacity: 1; }
100% { opacity: 1; }
`

const Hi = styled.div`
  animation-name: ${animateHi};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateQueens = keyframes`
   0% { opacity: 0; }
  45% { opacity: 0; transform: translate(0px, -1vh)}
  60% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Queens = styled.div`
  animation-name: ${animateQueens};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const Hello = ({ duration }) => (
  <Movement duration={duration}>
    <Type>
      <Hi duration={duration}>Hello,</Hi>
      <Queens duration={duration}>Queens</Queens>
    </Type>
  </Movement>
)

export { Hello }
