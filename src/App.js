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
    this.reset()
  }

  preflight = () => {
    return new Promise((resolve, reject) => {
      console.log('preflight start')
      this.setState({
        currentSlide: 1
      })
      setTimeout(() => {
        resolve('preflight end')
      }, 3000)
    })
  }

  weHaveMoved = () => {
    return new Promise((resolve, reject) => {
      console.log('weHaveMoved start')
      this.setState({
        currentSlide: 2
      })
      setTimeout(() => {
        resolve('weHaveMoved end')
      }, 3000)
    })
  }

  goodbyeBrooklyn = () => {
    return new Promise((resolve, reject) => {
      console.log('goodbyeBrooklyn start')
      this.setState({
        currentSlide: 0,
        currentMapStop: 1
      })
      setTimeout(() => {
        resolve('goodbyeBrooklyn end')
      }, 3000)
    })
  }

  helloQueens = () => {
    return new Promise((resolve, reject) => {
      console.log('helloQueens start')
      this.setState({
        currentMapStop: 2
      })
      setTimeout(() => {
        resolve('helloQueens end')
      }, 3000)
    })
  }

  newAddress = () => {
    return new Promise((resolve, reject) => {
      console.log('newAddress start')
      this.setState({
        currentSlide: 3
      })
      setTimeout(() => {
        resolve('newAddress end')
      }, 3000)
    })
  }

  async componentDidMount() {
    let n = 10
    while (n--) {
      await this.cycle()
    }
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
