import { createBrowserRouter } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import CreateRoom from './Pages/CreateRoom'
import Rooms from './Pages/Rooms'
import Settings from './Pages/Settings'
import Setup from './Pages/Setup'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    { path: "/signup", element: <Signup /> },
    { path: "/home", element: <Home /> },
    { path: "/createRoom", element: <CreateRoom /> },
    { path: "/rooms", element: <Rooms /> },
    { path: "/settings", element: <Settings /> },
    { path: "/setup", element: <Setup /> },
]);