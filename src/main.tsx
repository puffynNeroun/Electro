import React from 'react'
import ReactDOM from 'react-dom/client'
import 'font-awesome/fonts/FontAwesome.otf'
import '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown.js'
import App from './App.tsx'

import './assets/styles/index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)
