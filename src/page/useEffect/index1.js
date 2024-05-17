import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/modules/counterStore';

function UseEffect1() {
  const dispatch = useDispatch()
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
      <button onClick={() => dispatch(increment())}>store counter 递增</button>
      <button onClick={() => dispatch(decrement())}>store counter 递减</button>
      <button onClick={() => dispatch(decrement(10))}>store counter +10</button>
      <button onClick={() => dispatch(decrement(-20))}>store counter -20</button>
      无参副作用函数 {count}
      <button onClick={() => setCount(count+1)}>count++</button>
    </div>
  )
}

export default UseEffect1
