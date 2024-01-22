import React from 'react'
import Statistics from '../Statistics'
import Feedback from '../Feedback'

export default function Content(props) {
  return (
    <main>
      <Feedback {...props} />
      <Statistics {...props} />
    </main>
  )
}
