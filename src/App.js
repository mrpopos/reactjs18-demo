import { createContext, useContext, useState } from "react";

import UseEffect from './page/useEffect/index';
import UseEffect1 from './page/useEffect/index1';
import SelfHook from './page/useEffect/selfHook';
import AsyncStore from './page/useEffect/asyncStore';
import Comment from './page/comment/index';
import { Link, useNavigate } from "react-router-dom";

const Ctx = createContext()

function A() {
  return (
    <div className="App">
      我是A组件
      <B />
    </div>
  );
}

function B() {
  const msg = useContext(Ctx)
  return (
    <div className="App">
      我是B组件, {msg}
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true)
  const msg = '状态提升信息'
  const navigate = useNavigate()
  return (
    <div className="App">
      我是app组件
      <Ctx.Provider value={msg}>
        <A />
      </Ctx.Provider>
      <hr/>
      <UseEffect />
      <hr/>
      <button onClick={() => setShow(false)}>卸载UseEffect1组件</button>
      {show && <UseEffect1/>}
      <hr/>
      <SelfHook />
      <hr/>
      <Comment />
      <hr/>
      <AsyncStore/>
      <hr/>
      <h5>声明式导航</h5>
      <Link to="/login">login</Link>
      <br/>
      <Link to="/about/abcd">about</Link>
      <h5>编程式导航</h5>
      <p onClick={() => navigate('/login?username=root&password=123456')}>login</p>
      <p onClick={() => navigate('/about/email')}>about</p>
    </div>
  );
}

export default App;
