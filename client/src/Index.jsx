import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChakraProvider
} from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx'
import NavBar from './components/NavBar.jsx';

const root = createRoot(document.getElementById('app'));

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);