import React, { Component } from 'react'
import { MovingMap } from './MovingMap'
import { Preflight, WeHaveMoved } from './slides'

const query = () =>
  document.location.search
    .substring(1)
    .split(/&/)
    .map(pair => pair.split(/=/))

const isDebugging = () =>
  query().filter(([k, v]) => k === 'debug' && ['1', 'true'].indexOf(v) >= 0)
    .length > 0

const isLooping = () =>
  query().filter(([k, v]) => k === 'loop' && ['1', 'true'].indexOf(v) >= 0)
    .length > 0

class App extends Component {
  static initialState = {
    currentSlide: 0,
    currentMapStop: 0
  }

  constructor(props) {
    super(props)
    this.state = App.initialState
  }

  reset = () => {
    this.setState(App.initialState)
  }

  cycle = async () => {
    console.log(await this.preflight())
    console.log(await this.weHaveMoved())
    // console.log(await this.goodbyeBrooklyn())
    // console.log(await this.helloQueens())
    // console.log(await this.newAddress())
    if (isLooping()) {
      this.reset()
      await this.cycle()
    }
  }

  setStateAndWait = (stateUpdate, delay, msg = '') => {
    return new Promise((resolve, reject) => {
      msg && console.log(`${msg} start`)
      this.setState(stateUpdate)
      setTimeout(() => {
        msg ? resolve(`${msg} end`) : resolve()
      }, delay)
    })
  }

  preflight = () => {
    return this.setStateAndWait({ currentSlide: 1 }, 3000, 'preflight')
  }

  weHaveMoved = () => {
    return this.setStateAndWait({ currentSlide: 2 }, 3000, 'weHaveMoved')
  }

  goodbyeBrooklyn = () => {
    return this.setStateAndWait(
      { currentSlide: 0, currentMapStop: 1 },
      3000,
      'goodbyeBrooklyn'
    )
  }

  helloQueens = () => {
    return this.setStateAndWait({ currentMapStop: 2 }, 3000, 'helloQueens')
  }

  newAddress = () => {
    return this.setStateAndWait({ currentSlide: 3 }, 3000, 'newAddress')
  }

  async componentDidMount() {
    await this.cycle()
  }

  render() {
    const props = {
      startView: {
        center: { lng: -73.96581, lat: 40.688828 },
        zoom: 17.5,
        bearing: -40,
        pitch: 60
      },
      endView: {
        center: { lng: -73.893013, lat: 40.750101 },
        zoom: 17.5,
        bearing: -160,
        pitch: 60
      }
    }
    return (
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {this.state.currentSlide === 1 && <Preflight />}
        {this.state.currentSlide === 2 && <WeHaveMoved />}
        <MovingMap {...props} debug={isDebugging()} />
      </div>
    )
  }
}

export default App
