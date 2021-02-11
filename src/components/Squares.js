import React from 'react'

export default function Squares(props) {
  return (
    <div className="squares" onClick={props.onClick}>
      {props.value}
    </div>
  )
}
