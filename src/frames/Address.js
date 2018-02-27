import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NEW_ADDRESS } from '../config'

const { addressee, address, city, state, postal } = NEW_ADDRESS

const delayedFadeOut = keyframes`
  0% { opacity: 0; }
 60% { opacity: 0.85; }
100% { opacity: 0.85; }
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
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-size: 2em;
  line-height: 140%;
  font-weight: 200;
`

const Address = ({ duration }) => (
  <FadingOverlay duration={duration}>
    <Type>
      <div>{addressee}</div>
      <div>{address}</div>
      <div>
        {city}, {state} {postal}
      </div>
    </Type>
  </FadingOverlay>
)

export { Address }
