import { useState, useEffect } from 'react';
import { listComment } from "../api/comment";

const useHttpGet = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const getList = () => {
      // 发起请求
      // fetch('http://localhost:8080/comments', {
      //   method: 'get'
      // }).then(response => {
      //   return response.json()
      // }).then(res => {
      //   setComment(_.orderBy(res, ["ctime"], ["desc"]))
      // })
      listComment().then((response) => {
        setComment(response)
      }).catch(error => {
        console.log('get comment list error:', error)
      });
    }
    getList()
  }, []);
  return {
    comment,
    setComment
  }
}

export default useHttpGet
