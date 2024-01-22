import React from 'react'
import StatisticLine from '../StatisticLine'

export default function Statistics(props) {
  return (
    <section>
      <h2>Statistics</h2>
      {props.all ? (
        <>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  )
}
