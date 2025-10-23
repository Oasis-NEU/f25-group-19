// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
            </Routes>
        </Router>
    )
}

export default App