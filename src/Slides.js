import React, { Component } from 'react'
import styled from 'styled-components'

const Animation = styled.div`
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 10em;
  height: 10em;
  z-index: 2;

  /* slide is offstage */
  background: cyan;
  /* visibility: hidden; */
  opacity: 0.5;
  transform: scale(0.95);
  transition: all 0.5s;

  /* slide is entering */
  &.entering {
    background: magenta;
    /* visibility: visible; */
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s;
  }

  /* slide is leaving */
  &.leaving {
    background: yellow;
    /* visibility: visible; */
    opacity: 0.5;
    transform: scale(0.5);
    transition: all 0.5s;
  }
`

class Preflight extends Component {
  render() {
    return <Animation className={'entering'}>Preflighting…</Animation>
  }
}

class WeHaveMoved extends Component {
  render() {
    return <Animation className={'entering'}>WeHaveMoved…</Animation>
  }
}

export { Preflight, WeHaveMoved }
