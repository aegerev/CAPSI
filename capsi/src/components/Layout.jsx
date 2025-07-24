import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // You'll need to create this Navbar component

function Layout() {
  return (
    <div>
      <Navbar /> {/* Your navigation bar */}
      <main>
        <Outlet /> {/* This is where the specific page content will be rendered */}
      </main>
      {/* You could add a Footer here if you have one */}
    </div>
  );
}

export default Layout;
