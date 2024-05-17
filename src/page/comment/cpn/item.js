const Item = ({ item, user, handleDelete }) => {
  return (
    <div className="comment-item">
      <h6>
        {item.uname} {item.id}
      </h6>
      <p>{item.content}</p>
      <div className="operate">
        <span className="time">{item.ctime}</span>
        <span className="like">点赞数:{item.like}</span>
        {item.uid === user.id && <button onClick={() => handleDelete(item.id)}>删除</button>}
      </div>
    </div>
  )
}

export default Item
