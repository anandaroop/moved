import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NEW_ADDRESS, VCARDS } from '../config'
import { Reset } from '../components'

const { addressee, address, city, state, postal } = NEW_ADDRESS

const delayedFadeOut = keyframes`
  0% { opacity: 0; }
 10% { opacity: 0; }
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
  font-size: 5vw;
  line-height: 140%;
  font-weight: 200;
`

const Tools = styled.div`
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cards = styled.div`
  font-size: 2vw;
`

const CardLink = styled.a`
  color: red;
  text-decoration: none;
  border-bottom: dotted 1px red;
  padding-bottom: 0.1em;
  margin-left: 1vw;
`

const Address = ({ duration, reset }) => (
  <FadingOverlay duration={duration}>
    <Type>
      <div>{addressee}</div>
      <div>{address}</div>
      <div>
        {city}, {state} {postal}
      </div>
      <Tools>
        <Cards>
          Download vCards for your address book:
          {VCARDS.map(card => (
            <CardLink key={card.filename} href={card.filename}>
              {card.name}
            </CardLink>
          ))}
        </Cards>
        <Reset onClick={reset} />
      </Tools>
    </Type>
  </FadingOverlay>
)

export { Address }
