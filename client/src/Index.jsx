import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChakraProvider
} from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact.jsx'

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
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
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