import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'

function App() {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10,
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7,
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14,
  // }
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10,
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7,
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14,
  //   },
  // ]
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        numberOfExercises={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  )
}

export default App
