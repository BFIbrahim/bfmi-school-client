import {
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import AuthProvider from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-5xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
