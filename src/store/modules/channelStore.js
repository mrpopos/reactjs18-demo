import { createSlice } from "@reduxjs/toolkit";
import { listChannels } from '../../api/redux';

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload;
    }
  }
})

// 异步请求
const { setChannelList } = channelStore.actions
const fetchChannelData = () => {
  return async (dispatch) => {
    const URL = 'http://geek.itheima.net/v1_0/channels';
    const res = await listChannels(URL)
    dispatch(setChannelList(res.data.channels))
  }
}

export { fetchChannelData }

const channelReducer = channelStore.reducer

export default channelReducer
