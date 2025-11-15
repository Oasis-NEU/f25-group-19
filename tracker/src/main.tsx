import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Use RouterProvider to render the routes */}
    <RouterProvider router={router} />
  </StrictMode>,
)