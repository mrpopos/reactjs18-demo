import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h5>layout组件 - 一级路由</h5>
      <Link to="/">home</Link>
      <Link to="/login?username=mrpopos&password=password">login</Link>
      <Link to="/about/123">about</Link>
      <Outlet />
    </div>
  )
}

export default Layout
