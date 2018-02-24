import React, { Component } from 'react'
import { MovingMap } from './MovingMap'
import { Preflight, WeHaveMoved } from './slides'
import { isDebugging, isLooping } from './querystring'

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

  play = async () => {
    await this.preflight()
    await this.weHaveMoved()
    await this.goodbyeBrooklyn()
    // await this.helloQueens()
    // await this.newAddress()
    if (isLooping()) {
      this.reset()
      await this.play()
    }
  }

  setStateAndWait = (stateUpdate, delay, msg = null) => {
    return new Promise((resolve, reject) => {
      msg && console.log(msg, stateUpdate)
      this.setState(stateUpdate)
      setTimeout(resolve, delay)
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
      7000,
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
    await this.play()
  }

  render() {
    const { currentSlide, currentMapStop } = this.state
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
        {currentSlide === 1 && <Preflight />}
        {currentSlide === 2 && <WeHaveMoved />}
        <MovingMap {...props} stop={currentMapStop} debug={isDebugging()} />
      </div>
    )
  }
}

export default App
