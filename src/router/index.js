import App from '../App'
import Login from '../page/Login'
import About from '../page/About'

import { createBrowserRouter } from 'react-router-dom'
// import { createHashRouter } from 'react-router-dom'
import Layout from '../page/Layout'
import NotFound from '../page/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: '/',
        index: true,
        element: <App />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/about/:id',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
