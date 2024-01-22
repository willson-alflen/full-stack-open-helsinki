import React from 'react'

export default function Feedback(props) {
  return (
    <section>
      <h2>Give feedback</h2>
      <button onClick={() => props.handleClick('good')}>good</button>
      <button onClick={() => props.handleClick('neutral')}>neutral</button>
      <button onClick={() => props.handleClick('bad')}>bad</button>
    </section>
  )
}
