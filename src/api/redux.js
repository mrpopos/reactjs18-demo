import request from '../utils/request';

export const listChannels = (url) => {
  return request({
    url,
    method: 'get'
  })
}
