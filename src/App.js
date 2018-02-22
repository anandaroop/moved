import React, { Component } from 'react'
import { MovingMap } from './MovingMap'

const query = () =>
  document.location.search
    .substring(1)
    .split(/&/)
    .map(pair => pair.split(/=/))

const isDebugging = () =>
  query().filter(([k, v]) => k === 'debug' && ['1', 'true'].indexOf(v) >= 0)
    .length > 0

class App extends Component {
  async componentDidMount() {
    console.log(await this.preflight())
    console.log(await this.weHaveMoved())
    console.log(await this.goodbyeBrooklyn())
    console.log(await this.helloQueens())
    console.log(await this.newAddress())
  }

  preflight = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'preflight')
    })
  }

  weHaveMoved = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'weHaveMoved')
    })
  }

  goodbyeBrooklyn = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'goodbyeBrooklyn')
    })
  }

  helloQueens = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'helloQueens')
    })
  }

  newAddress = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'newAddress')
    })
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
      <div style={{ width: '100vw', height: '100vh' }}>
        <MovingMap {...props} debug={isDebugging()} />
      </div>
    )
  }
}

export default App
