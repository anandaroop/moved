import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MAPBOX_ACCESS_TOKEN } from '../config'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`

const cameraPropType = PropTypes.shape({
  center: PropTypes.shape({
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  bearing: PropTypes.number.isRequired,
  pitch: PropTypes.number.isRequired
})

class Map extends Component {
  static INITIALIZING = 'initializing'
  static PREFLIGHTING = 'preflighting'
  static FLYING = 'flying'

  static propTypes = {
    origin: cameraPropType.isRequired,
    destination: cameraPropType.isRequired,
    duration: PropTypes.number.isRequired,
    preflight: PropTypes.bool.isRequired,
    preflightDuration: PropTypes.number,
    style: PropTypes.string.isRequired
  }

  static defaultProps = {
    style: 'mapbox/light-v9'
  }

  _container
  _map

  reset = () => {
    const { origin } = this.props
    this._map.jumpTo({ ...origin })
  }

  preflight = () => {
    const { duration, preflightDuration, origin } = this.props
    this._map.flyTo({ duration: preflightDuration || duration, ...origin })
  }

  fly = () => {
    const { duration, destination } = this.props
    this._map.flyTo({ duration, ...destination })
  }

  setup() {
    const { preflight, origin, destination } = this.props
    const startingView = preflight ? destination : origin

    this._map = new mapboxgl.Map({
      container: this._container,
      style: `mapbox://styles/${this.props.style}`,
      ...startingView
    })

    this._map.on('load', ({ target: map }) => {
      let style = map.getStyle()
      map.setStyle({
        light: {
          anchor: 'map',
          color: 'white',
          intensity: 0.15,
          position: [1.5, 90, 80]
        },
        ...style
      })

      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 16,
        paint: {
          'fill-extrusion-color': '#fff',
          'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 16, 0, 16.05, ['get', 'height']],
          'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 16, 0, 16.05, ['get', 'min_height']],
          'fill-extrusion-opacity': 0.8
        }
      })
    })
  }

  componentDidMount() {
    this.setup()
    this.setState({
      mapState: Map.PREFLIGHTING
    })
  }

  shouldComponentUpdate(nextProps, _nextState) {
    return nextProps.mapState !== this.props.mapState
  }

  componentDidUpdate(prevProps, prevState) {
    const { mapState } = this.props
    mapState === Map.INITIALIZING && this.reset()
    mapState === Map.PREFLIGHTING && this.preflight()
    mapState === Map.FLYING && this.fly()
  }

  componentWillUnmount() {
    this._map.remove()
  }

  render() {
    return <MapContainer innerRef={el => (this._container = el)} />
  }
}

export { Map }
