// This is the "starting point" of the React app.
// Think of it like the ignition switch that turns everything on.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Find the empty <div id="root"> from index.html,
// and tell React: "put our whole app inside this div"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
