import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import KartyaContextProvider from './context/KartyaContextProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KartyaContextProvider>
      <App />
    </KartyaContextProvider>
  </StrictMode>,
)
