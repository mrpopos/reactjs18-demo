import { useState, useRef } from "react";
import avator from "../../images/avator.png";
import "./index.scss";
import _ from "lodash";
import classNames from "classnames";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import useHttpGet from '../../hooks/useHttpGet';
import Item from './cpn/item';

const user = {
  id: 3,
  name: "bkaclin",
};
const tabs = [
  {
    type: "new",
    label: "最新",
  },
  {
    type: "hot",
    label: "最热",
  },
];

const Comment = ({ msg, children, getChildMsg }) => {
  // const [comment, setComment] = useState(_.orderBy(comments, "like", "desc"));
  const { comment, setComment } = useHttpGet()
  const [type, setType] = useState("hot");
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleDelete = (id) => {
    setComment(comment.filter((item) => item.id !== id));
  };

  const handleTabChange = (type) => {
    setType(type);
    switch (type) {
      case "new":
        setComment(_.orderBy(comment, ["ctime"], ["desc"]));
        break;
      case "hot":
        setComment(_.orderBy(comment, ["like"], ["desc"]));
        break;
      default:
        break;
    }
  };

  const handleAdd = () => {
    if (!value.trim()) {
      alert("内容不能为空！！！");
      return;
    }
    const cur = {
      id: uuidv4(),
      uid: 3,
      uname: "bkaclin",
      content: value.trim(),
      ctime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      like: 888,
    };
    setComment([...comment, cur]);
    // 清空输入框
    setValue("");
    // 聚焦
    inputRef.current.focus();
  };

  const onChildMsg = () => {
    setCount(count + 1);
    console.log("count:::::::::", count);
    getChildMsg(`子组件第${count}次发送数据...`);
  };

  return (
    <div className="comment">
      <h1>{msg}</h1>
      {children}
      <button onClick={onChildMsg}>send</button>
      <div className="title">评论列表</div>
      <div className="row1">
        <span className="small-title">
          <b>评论</b>12
        </span>
        <div className="tab">
          {tabs.map((item) => (
            <span className={classNames("tab-item", { active: item.type === type })} key={item.type} onClick={() => handleTabChange(item.type)}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="row2">
        <img src={avator} alt="" />
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
        <button onClick={handleAdd}>publish</button>
      </div>
      <div className="comment-list">
        {comment.map((item) => <Item item={item} user={user} handleDelete={handleDelete} key={item.id} />)}
      </div>
    </div>
  );
};

export default Comment;
