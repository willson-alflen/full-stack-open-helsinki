import React from 'react'

export default function Statistics(props) {
  return (
    <section>
      <h2>Statistics</h2>
      {props.all ? (
        <>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.all}</p>
          <p>average {props.average}</p>
          <p>positive {props.positive} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  )
}
