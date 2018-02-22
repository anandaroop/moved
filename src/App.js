import React, { Component } from 'react'
import { MovingMap } from './MovingMap'
class App extends Component {
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
        <MovingMap {...props} />
      </div>
    )
  }
}

export default App
