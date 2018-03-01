import React, { Component } from 'react'
import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'
import { Map } from './components/Map'
import { Preflight, Goodbye, Blank, Hello, Address } from './frames'
import { isLooping } from './helpers/querystring'

const Fullscreen = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  style: 'artsyroop/cjdqwo0gm1vba2ro9bu1uagf0',
  origin,
  destination,
  duration: 8000,
  preflight: true,
  preflightDuration: 5000
}

class App extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      mapState: Map.INITIALIZING,
      playing: true
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

  waitThenStartFlying = (delay = 2000) => {
    setTimeout(this.startFlying, delay)
  }

  reset = () => {
    this.setState({ mapState: Map.PREFLIGHTING, playing: false })
    setTimeout(() => {
      this.setState({ playing: true })
    }, 0)
  }

  render() {
    const { playing } = this.state
    return (
      <Fullscreen>
        <Map {...mapProps} mapState={this.state.mapState} />
        {playing && (
          <Keyframes loop={isLooping()}>
            <Frame duration={5000} component={Preflight} onRender={this.startPreflighting} />
            <Frame duration={4000} component={Goodbye} onRender={this.waitThenStartFlying} />
            <Frame duration={2000} component={Blank} />
            <Frame duration={5000} component={Hello} />
            <Frame duration={5000} component={Address} reset={this.reset} />
          </Keyframes>
        )}
      </Fullscreen>
    )
  }
}

export default App
