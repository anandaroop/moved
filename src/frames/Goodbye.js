import React from 'react'
import styled, { keyframes } from 'styled-components'

const liftOff = keyframes`
  0% { opacity: 0; transform: translate(0, 0); }
 50% { opacity: 1; transform: translate(0, 0); }
 80% { opacity: 0; }
 95% { opacity: 0; transform: translate(0, -40vw); }  
100% { opacity: 0; transform: translate(0, -40vw); }  
`

const Movement = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;

  animation-name: ${liftOff};
  animation-duration: ${props => `${props.duration / 1000}s`};
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

const Type = styled.div`
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-size: 10vw;
  line-height: 120%;
  font-weight: 200;
`

const animateBye = keyframes`
  0% { opacity: 0; }
 15% { opacity: 0; }
 25% { opacity: 1; }
100% { opacity: 1; }
`

const Bye = styled.div`
  animation-name: ${animateBye};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateBrooklyn = keyframes`
   0% { opacity: 0; }
  20% { opacity: 0; transform: translate(0px, -1vh)}
  30% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Brooklyn = styled.div`
  animation-name: ${animateBrooklyn};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const Goodbye = ({ duration }) => (
  <Movement duration={duration}>
    <Type>
      <Bye duration={duration}>Goodbye,</Bye>
      <Brooklyn duration={duration}>Brooklyn</Brooklyn>
    </Type>
  </Movement>
)

export { Goodbye }
