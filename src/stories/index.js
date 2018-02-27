import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import '../index.css'
import { Preflight, Goodbye, Hello, Address } from '../frames'
import bg from '../stories/bg.png'

const SampleBackgroundMap = styled.div`
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  position: absolute;
`

storiesOf('Frames', module)
  .addDecorator(story => <SampleBackgroundMap>{story()}</SampleBackgroundMap>)
  .add('Preflight', () => <Preflight duration={5000} />)
  .add('Goodbye', () => <Goodbye duration={3000} />)
  .add('Hello', () => <Hello duration={3000} />)
  .add('Address', () => <Address duration={3000} />)
