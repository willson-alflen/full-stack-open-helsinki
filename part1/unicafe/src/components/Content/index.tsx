import React from 'react'

export default function Content(props) {
  return (
    <main>
      <section>
        <h2>Give feedback</h2>
        <button onClick={() => props.handleClick('good')}>good</button>
        <button onClick={() => props.handleClick('neutral')}>neutral</button>
        <button onClick={() => props.handleClick('bad')}>bad</button>
      </section>
      <section>
        <h2>Statistics</h2>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.all}</p>
        <p>average {props.average}</p>
        <p>positive {props.positive} %</p>
      </section>
    </main>
  )
}
