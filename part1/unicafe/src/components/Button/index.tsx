import React from 'react'

export default function Button({ handleClick, label }) {
  return <button onClick={() => handleClick(label)}>{label}</button>
}
