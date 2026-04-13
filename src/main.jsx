import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import './index.css'

import { AuthProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>,
)
