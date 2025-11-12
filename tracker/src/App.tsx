import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import CreateRoom from './Pages/CreateRoom'
import Rooms from './Pages/Rooms'
import Settings from './Pages/Settings'
import Setup from './Pages/Setup'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/createRoom" element={<CreateRoom />}/>
                <Route path="/rooms" element={<Rooms />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/setup" element={<Setup />}/> {/* 2. Add the route for /setup */}
            </Routes>
        </Router>
    )
}

export default App