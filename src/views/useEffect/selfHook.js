// import { useState } from 'react'
import useToggle from '../../hooks/useToggle'

// const [value, SetValue] = useState(false)

function SelfHook() {
  const { show, handleToggle } = useToggle()

  return (
    <div>
      {show && <div>This is div.</div>}
      <button onClick={handleToggle}>toggle</button>
    </div>
  )
}

export default SelfHook
