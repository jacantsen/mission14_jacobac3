import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import PodcastPage from './pages/PodcastPage';
import Movies from './pages/Movies';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/podcasts",
    element:<PodcastPage/>
  },
  {
    path:"/movielist",
    element: <Movies/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


