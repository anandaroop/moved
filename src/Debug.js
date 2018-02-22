import React from 'react'
import styled from 'styled-components'

const DebugPanel = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
`

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  display: block;
  border-radius: 5px;
  background: #fff;
`
export const Debug = ({ map: movingMap }) => {
  return (
    <DebugPanel>
      <Button
        onClick={() => {
          movingMap.forward()
        }}
      >
        Forward
      </Button>
      <Button
        onClick={() => {
          movingMap.backward()
        }}
      >
        Backward
      </Button>
    </DebugPanel>
  )
}
