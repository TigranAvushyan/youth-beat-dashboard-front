import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/auth/LoginPage';
import React from 'react';
import { HomePage } from './pages/home /HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
