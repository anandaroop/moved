import React, { Component } from 'react'
import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'
import { Map } from './Map'
import { Preflight, Goodbye, Noop, Hello, Address } from './frames'
import { isLooping } from './querystring'

const Fullscreen = styled.div`
  width: 100vw;
  height: 100vh;
`

const origin = {
  center: { lng: -73.96581, lat: 40.688828 },
  zoom: 17.5,
  bearing: -40,
  pitch: 60
}

const destination = {
  center: { lng: -73.893013, lat: 40.750101 },
  zoom: 17.5,
  bearing: -160,
  pitch: 60
}

const mapProps = {
  origin,
  destination,
  duration: 7000,
  preflight: true,
  preflightDuration: 5000
}

class App extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      mapState: Map.INITIALIZING
    }
  }

  startPreflighting = () => {
    this.setState({
      mapState: Map.PREFLIGHTING
    })
  }

  startFlying = () => {
    this.setState({
      mapState: Map.FLYING
    })
  }

  render() {
    return (
      <Fullscreen>
        <Map {...mapProps} mapState={this.state.mapState} />
        <Keyframes loop={isLooping()}>
          <Frame duration={5000} component={Preflight} onRender={this.startPreflighting} />
          <Frame duration={3000} component={Goodbye} />
          <Frame duration={6000} component={Noop} onRender={this.startFlying} />
          <Frame duration={3000} component={Hello} />
          <Frame duration={3000} component={Address} />
        </Keyframes>
      </Fullscreen>
    )
  }
}

export default App
