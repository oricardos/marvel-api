import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout/index.jsx';
import { Dashboard } from './screens/Dashboard/index.jsx';

const router = createBrowserRouter([
  {path: '/',
  element: <Layout />,
  errorElement: <div>ops, deu ruim</div>,
  children: [
    {
      index: true,
      element: <Dashboard />
    },
    {
      path: "comics",
      element: <div>comics</div>
    },
    {
      path: "characters",
      element: <div>characters</div>
    },
    {
      path: "stories",
      element: <div>stories</div>
    },
    {
      path: "series",
      element: <div>series</div>
    },
    {
      path: "creators",
      element: <div>creators</div>
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
