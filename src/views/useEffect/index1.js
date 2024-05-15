import { useState, useEffect } from "react"

function UseEffect1() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('无参副作用函数执行')
  // })
  useEffect(() => {
    // console.log('无参副作用函数执行')
    let timer = setInterval(() => {
      console.log('定时器...')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  // useEffect(() => {
  //   console.log('无参副作用函数执行')
  // }, [count])

  return (
    <div>
      无参副作用函数 {count}
      <button onClick={() => setCount(count+1)}>count++</button>
    </div>
  )
}

export default UseEffect1
