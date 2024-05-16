import { createContext, useContext, useState } from "react";

import UseEffect from './views/useEffect/index';
import UseEffect1 from './views/useEffect/index1';
import SelfHook from './views/useEffect/selfHook';
import AsyncStore from './views/useEffect/asyncStore';
import Comment from './views/comment/index';

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
    </div>
  );
}

export default App;
