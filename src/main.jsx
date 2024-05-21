import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout/index.jsx';
import { Dashboard } from './screens/Dashboard/index.jsx';

import { register } from "swiper/element/bundle";
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Character } from './screens/Character/index.jsx';

const router = createBrowserRouter([
  {path: '/',
  element: <Layout />,
  errorElement: <div>ops, deu ruim</div>,
  children: [
    {
      index: true,
      element: <Dashboard />
    },
    // comics
    {
      path: "comics",
      element: <div>comics</div>
    },
    // characters
    {
      path: "characters",
      element: <div>characters</div>,
    },
    {
      path: '/characters/:id',
      element: <Character />
    },
    // stories
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
