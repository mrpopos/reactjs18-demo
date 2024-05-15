import request from '../utils/request';

export const listComment = () => {
  return request({
    url: 'comments',
    method: 'get'
  })
}
