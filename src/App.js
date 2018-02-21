import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MAPBOX_ACCESS_TOKEN } from './secrets'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
class App extends React.Component {
  _container
  _map

  static propTypes = {
    initialStyle: PropTypes.string.isRequired
  }

  static defaultProps = {
    initialStyle: 'mapbox/light-v9'
  }

  componentDidMount() {
    const options = {
      container: this._container,
      style: `mapbox://styles/${this.props.initialStyle}`
    }
    this._map = new mapboxgl.Map(options)
  }

  componentWillUnmount() {
    this._map.remove()
  }

  render() {
    return <MapContainer innerRef={el => (this._container = el)} />
  }
}

export default App
