import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.tsx'
import Landing from './Landing.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
   { /* <Login /> */}
  </StrictMode>,
)
