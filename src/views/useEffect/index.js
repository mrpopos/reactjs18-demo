import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'
function UseEffect() {
  useEffect(() => {
    // console.log('UseEffect组件')
    const getList = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      // return list
      setList(data.data.channels)
    }
    getList()
  }, [])

  const [list, setList] = useState([])
  return (
    <div className="effect-demo">
      <h5>---渠道列表---</h5>
      {
        list.map(item => (<p key={item.id}>id: {item.id} - name: {item.name}</p>))
      }
    </div>
  )
}

export default UseEffect
