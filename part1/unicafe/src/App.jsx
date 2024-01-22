import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const title = 'Unicafe Feedback'
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  const allFeedback = goodCount + neutralCount + badCount

  const identifyFeedback = (feedback) => {
    if (feedback === 'good') {
      setGoodCount((prevGoodCount) => (prevGoodCount += 1))
    } else if (feedback === 'neutral') {
      setNeutralCount((prevNeutralCount) => (prevNeutralCount += 1))
    } else {
      setBadCount((prevBadCount) => (prevBadCount += 1))
    }
  }

  const average = () => {
    if (allFeedback === 0) {
      return 0
    }
    return ((goodCount - badCount) / allFeedback).toFixed(2)
  }
  const positive = () => {
    if (allFeedback === 0) {
      return 0
    }
    return ((goodCount / allFeedback) * 100).toFixed(2)
  }

  return (
    <>
      <Header title={title} />
      <Content
        handleClick={identifyFeedback}
        good={goodCount}
        neutral={neutralCount}
        bad={badCount}
        all={allFeedback}
        average={average()}
        positive={positive()}
      />
    </>
  )
}

export default App
