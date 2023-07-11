import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import ErrorPage from './pages/NotFound';

export const ThemeContext = createContext('light');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
]);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </ThemeContext.Provider>
  );
};

export default App;



