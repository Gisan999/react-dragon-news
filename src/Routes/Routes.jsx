import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Roots from "../components/Roots/Roots";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import News from "../components/News/News";
import PrivateRoute from "./PrivateRoute";
const routes = createBrowserRouter([
    {
        path: "/",
        element:<Roots></Roots>,
        children: ([
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ])
    }
])
export default routes;