import React from 'react'
import Button from '../Button'

export default function Feedback(props) {
  return (
    <section>
      <h2>Give feedback</h2>
      <Button handleClick={props.handleClick} label="good" />
      <Button handleClick={props.handleClick} label="neutral" />
      <Button handleClick={props.handleClick} label="bad" />
    </section>
  )
}
