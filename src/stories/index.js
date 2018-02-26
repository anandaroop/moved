import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import '../index.css'
import { Preflight } from '../frames/Preflight'
import bg from '../stories/bg.png'

const SampleBackgroundMap = styled.div`
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  position: absolute;
`

storiesOf('Frames', module).add('Preflight', () => (
  <SampleBackgroundMap>
    <Preflight duration={5000} />
  </SampleBackgroundMap>
))
