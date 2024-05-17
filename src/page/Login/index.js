import { useSearchParams } from "react-router-dom"

const Login = () => {
  const [params] = useSearchParams()
  return (
    <div>
      <h5>登录页</h5>
      <div>username:{params.get('username')}</div>
      <div>password:{params.get('password')}</div>
    </div>
  )
}

export default Login
