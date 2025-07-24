import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all your page components
import App from './App.jsx'; // This is now just your home page content
import IndustrialActionPlans from './pages/Industrial-Action-Plans.jsx';
import VitalRail from './pages/VitalRail.jsx';
import ParticipationOptions from './pages/Participation-Options.jsx';
import OTNAEthics from './pages/OTNA-Ethics.jsx';
import AboutOnTrackNorthAmerica from './pages/About-OTNA.jsx';
import BrainTrust from './pages/BrainTrust.jsx';

// Import your Layout component and an Error page (if you have one)
import Layout from './components/Layout.jsx';
// Assuming you have an Error component, if not, create a simple one for now:
function Error() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // <-- FIX: Layout is the parent element
    errorElement: <Error />, // Keep your error element here
    children: [
      {
        index: true, // <-- FIX: Use index: true for the default child of the parent path
        element: <App />, // <-- FIX: App (your home page content) is a child of Layout
      },
      {
        path: 'industrial-action-plans', // No leading slash for child paths
        element: <IndustrialActionPlans />,
      },
      {
        path: 'vitalrail',
        element: <VitalRail />,
      },
      {
        path: 'participation-options',
        element: <ParticipationOptions />,
      },
      {
        path: 'otna-ethics',
        element: <OTNAEthics />,
      },
      {
        path: 'about', // Common to use 'about' for AboutUs/AboutCompany
        element: <AboutOnTrackNorthAmerica />,
      },
      {
        path: 'braintrust',
        element: <BrainTrust />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);