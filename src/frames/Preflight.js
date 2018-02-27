import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NAMES } from '../config'

const { name1, name2, name3 } = NAMES

const delayedFadeOut = keyframes`
  0% { opacity: 1; }
 80% { opacity: 1; }
100% { opacity: 0; }
`

const FadingOverlay = styled.div`
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
`

const animateName1 = keyframes`
  0% { opacity: 0; }
 15% { opacity: 1; }
100% { opacity: 1; }
`

const Name1 = styled.div`
  animation-name: ${animateName1};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateName2 = keyframes`
   0% { opacity: 0; }
  15% { opacity: 0; transform: translate(0px, -1vh)}
  30% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Name2 = styled.div`
  animation-name: ${animateName2};
  animation-duration: ${props => `${props.duration / 1000}s`};
`

const animateName3 = keyframes`
   0% { opacity: 0; }
  30% { opacity: 0; transform: translate(0px, -1vh)}
  45% { opacity: 1; transform: translate(0px, 0px)}
 100% { opacity: 1; }
 `

const Name3 = styled.div`
  animation-name: ${animateName3};
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
  <FadingOverlay duration={duration}>
    <Type duration={duration}>
      <Name1 duration={duration}>{name1}</Name1>
      <Name2 duration={duration}>and {name2}</Name2>
      <Name3 duration={duration}>and {name3} have </Name3>
      <Moved duration={duration}>moved</Moved>
    </Type>
  </FadingOverlay>
)

export { Preflight }
