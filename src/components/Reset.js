import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  border: none;
  text-decoration: none;
  font-size: 0.5em;
  width: 1.25em;
  height: 1.25em;
  line-height: 1.25em;
  text-align: center;
  border-radius: 1em;
  color: red;
  transition: background 0.4s;

  &:hover {
    cursor: pointer;
    background: hsla(0, 100%, 95%, 1);
    transition: background 0.2s;
  }
`

export const Reset = ({ onClick }) => <Button onClick={onClick}>↺</Button>
