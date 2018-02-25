import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'
import { Map } from './Map'
import { Preflight } from './frames'

const Fullscreen = styled.div`
  width: 100vw;
  height: 80vh;
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

class App2 extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      mapState: Map.INITIALIZING
    }
  }

  // componentWillMount() {}
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}

  render() {
    return (
      <Fullscreen>
        <Map {...mapProps} mapState={this.state.mapState} />
        <Keyframes>
          {/* display a splash screen while we prefetch vector tiles */}
          <Frame
            duration={5000}
            animationDuration={5000}
            component={Preflight}
            onRender={() => {
              this.setState({
                mapState: Map.PREFLIGHTING
              })
            }}
          />

          <Frame duration={3000}>g2b</Frame>

          {/* show an empty span while we fly */}
          <Frame
            duration={6000}
            onRender={() => {
              this.setState({
                mapState: Map.FLYING
              })
            }}
          >
            {''}
          </Frame>

          <Frame duration={3000}>h2q</Frame>

          <Frame duration={3000}>73a</Frame>
        </Keyframes>
      </Fullscreen>
    )
  }
}

export default App2
