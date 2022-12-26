import { Navigate } from "react-router-dom"
import Home from "../pages/home/home"
import LoginPage from "../pages/loginPage/loginPage"

 const routes = [
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/loginPage',
      element: <LoginPage/>
    },
    {
      path: '/',
      element: <Navigate to={'/home'}/>
    }
]

export default routes;