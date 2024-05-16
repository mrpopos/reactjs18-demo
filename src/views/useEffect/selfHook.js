// import { useState } from 'react'
import useToggle from '../../hooks/useToggle'
import { useSelector } from 'react-redux'

// const [value, SetValue] = useState(false)

function SelfHook() {
  const { channelList } = useSelector(state => state.channel)
  const { show, handleToggle } = useToggle()

  return (
    <div>
      {show && <div>This is div.</div>}
      <button onClick={handleToggle}>toggle</button>
      <h5>渲染api异步获取的channelList</h5>
      <ul>
        {
          channelList.map(item => <li key={item.id}>{item.id} --- {item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default SelfHook
