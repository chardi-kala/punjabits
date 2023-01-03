import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from './pages/about';
import Gallery from './pages/gallery';
import Events from './pages/events';
import IntMeet22 from './pages/events/intmeet22';
import VMeet22 from './pages/events/vmeet22';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/events/intmeet22',
    element: <IntMeet22 />
  },
  {
    path: '/events/vmeet22',
    element: <VMeet22 />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
