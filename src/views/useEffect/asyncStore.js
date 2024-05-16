import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchChannelData } from '../../store/modules/channelStore'

const AsyncStore = () => {
  const dispatch = useDispatch()
  // 使用useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelData())
  }, [dispatch])
  return (
    <div className="async-store">
      <h2>Async Store</h2>
    </div>
  )
}

export default AsyncStore
