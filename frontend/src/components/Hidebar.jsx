import React from 'react';
import { useLocation } from 'react-router-dom';

const Hidebar = ({ children }) => {

  const location = useLocation();
  console.log("Current location:", location.pathname);
  const hideRoutes = ['/Login', '/Signup'];
  if (hideRoutes.includes(location.pathname)) return null;

  // Otherwise render children (Navbar, Footer, etc.)
  return <>{children}</>;
};

export default Hidebar;
