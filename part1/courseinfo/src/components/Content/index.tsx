import React from 'react'
import Part from '../Part'

function Content({ parts }) {
  const part1 = parts[0]
  const part2 = parts[1]
  const part3 = parts[2]

  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

export default Content
