import { BrowserRouter as Router } from 'react-router-dom'
import Rotas from './Routes/Routes.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListStyleProvider } from './context/ListStyleContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListStyleProvider>
      <Router>
        <App />
      </Router>
    </ListStyleProvider>
  </React.StrictMode>,
)
