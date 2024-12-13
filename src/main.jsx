import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserCard } from './UserCard.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <UserCard />
  </StrictMode>,
)
