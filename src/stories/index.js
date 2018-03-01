import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import '../index.css'
import App from '../App'
import { Preflight, Goodbye, Hello, Address } from '../frames'
import { Reset } from '../components'
import bg from '../stories/bg.png'

const SampleBackgroundMap = styled.div`
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${bg});
  background-size: cover;
  position: absolute;
`

storiesOf('App', module)
  .addDecorator(story => (
    <div>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css" rel="stylesheet" />
      {story()}
    </div>
  ))
  .add('test', () => <App />)

storiesOf('Frames', module)
  .addDecorator(story => <SampleBackgroundMap>{story()}</SampleBackgroundMap>)
  .add('Preflight', () => <Preflight duration={5000} />)
  .add('Goodbye', () => <Goodbye duration={4000} />)
  .add('Hello', () => <Hello duration={3000} />)
  .add('Address', () => <Address duration={3000} />)

storiesOf('Components', module)
  .addDecorator(story => <div style={{ fontSize: '200%' }}>{story()}</div>)
  .add('Reset', () => <Reset onClick={action('reset')} />)
