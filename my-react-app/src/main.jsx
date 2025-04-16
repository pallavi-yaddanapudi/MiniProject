import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import DonorDashboard from './components/DonorDashboard.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import AgentDashboard from './components/AgentDashboard.jsx';
import DonationForm from './components/DonationForm.jsx';
import PreviousDonations from './components/PreviousDonations.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/donor-dashboard', element: <DonorDashboard /> },
      {path:'/admin-dashboard',element:<AdminDashboard/>},
      {path:'/donor-dashboard',element:<DonorDashboard/>},
      {path:'/agent-dashboard',element:<AgentDashboard/>},
      {path:"/donation",element:<DonationForm/>},
      {path:"/previous-donations",element:<PreviousDonations/>}

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
